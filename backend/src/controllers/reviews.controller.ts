import { Request, Response } from "express";
import { database } from "../appwrite-sdk";
import { databaseConfig } from "../constants/database";
import { ID, Query } from "node-appwrite";
import { CustomRequest } from "../@types/express";
import { ReviewsAttributes } from "../@types/reviews";
import { PlaceAtrributes } from "../@types/places";

export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const { place_id } = req.params;

    if (!place_id)
      return res
        .status(400)
        .json({ success: false, error: "Place id not found." });

    const data = await database.listDocuments(
      databaseConfig.databaseId,
      databaseConfig.reviewsCollectionId,
      [Query.equal("place_id", place_id)]
    );

    res.json({ success: true, data });
  } catch (error) {
    error instanceof Error &&
      res.status(500).json({ success: false, error: error.message });
  }
};

export const createReview = async (req: CustomRequest, res: Response) => {
  try {
    const payload = req.body as ReviewsAttributes;
    const appwriteInstance = req.client;

    const account = appwriteInstance?.getAccount();
    const userInfo = await account?.get();
    const author_id = userInfo?.$id;

    payload.author_id = author_id as string;

    const rating = payload.rating;
    let rewardPoint = 0;

    switch (rating) {
      case 4:
        rewardPoint = 10;
        break;
      case 5:
        rewardPoint = 20;
        break;
    }

    const placeInfo: any = await database.getDocument(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId,
      payload.place_id
    );

    let { total_reviews, average_rating } = placeInfo;

    total_reviews = +total_reviews + 1;
    average_rating = ((average_rating + rating) / 2).toFixed(1);

    await database.updateDocument(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId,
      placeInfo.$id,
      { average_rating, total_reviews }
    );

    let rewardPayload = {
      place_id: payload.place_id,
      point: rewardPoint,
      contributor_id: placeInfo.author_id,
    };

    rewardPoint > 0 &&
      (await database.createDocument(
        databaseConfig.databaseId,
        databaseConfig.rewardCollectionId,
        ID.unique(),
        rewardPayload
      ));

    await database.createDocument(
      databaseConfig.databaseId,
      databaseConfig.reviewsCollectionId,
      ID.unique(),
      payload
    );

    res.json({ success: true, message: "Review added." });
  } catch (error) {
    console.log(error);
    error instanceof Error &&
      res.status(500).json({ success: false, error: error.message });
  }
};
