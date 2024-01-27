import { Request, Response } from "express";
import { database } from "../appwrite-sdk";
import { databaseConfig } from "../constants/database";
import { ID, Query } from "node-appwrite";
import { CustomRequest } from "../@types/express";
import { PlaceAtrributes } from "../@types/places";

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const data = await database.listDocuments(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    error instanceof Error &&
      res.status(500).json({ success: false, error: error.message });
  }
};

export const getPlaceById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await database.listDocuments(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId,
      [Query.equal("$id", id)]
    );
    return res.json({ success: true, data });
  } catch (error) {
    error instanceof Error &&
      res.status(500).json({ success: false, error: error.message });
  }
};

export const createPlace = async (req: CustomRequest, res: Response) => {
  try {
    const appwriteInstance = req.client;
    const database = appwriteInstance?.getDatabase();
    const account = appwriteInstance?.getAccount();
    const userInfo = await account?.get();

    const payload = req.body as PlaceAtrributes;
    payload.author_id = userInfo?.$id ?? "";

    await database?.createDocument(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId,
      ID.unique(),
      payload
    );

    res.json({ success: true, message: "Place added successfully." });
  } catch (error) {
    error instanceof Error &&
      res.status(500).json({ success: false, error: error.message });
  }
};

export const getContributions = async (req: CustomRequest, res: Response) => {
  try {
    const appwriteInstance = req.client;
    const account = appwriteInstance?.getAccount();
    const database = appwriteInstance?.getDatabase();
    const userInfo = await account?.get();
    const id = userInfo?.$id;

    if (!id) {
      return res.status(400).json({ success: false, error: "Id not found." });
    }

    const myContributions = await database?.listDocuments(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId,
      [Query.equal("author_id", id)]
    );

    res.json({ success: true, data: myContributions });
  } catch (error) {
    error instanceof Error &&
      res.status(500).json({ success: false, error: error.message });
  }
};
