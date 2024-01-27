import { Request, Response } from "express";
import { database } from "../appwrite-sdk";
import { databaseConfig } from "../constants/database";
import { Query } from "node-appwrite";
import { CustomRequest } from "../@types/express";

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const data = await database.listDocuments(
      databaseConfig.databaseId,
      databaseConfig.placesCollectionId
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
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
    res.status(500).json({ success: false, error });
  }
};

export const createPlace = async (req: CustomRequest, res: Response) => {
  try {

    const appwriteInstance = req.client;
    const database = appwriteInstance?.getDatabase();

    const {  } = req.body;


    
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
