import { Request, Response } from "express";
import { database } from "../appwrite-sdk";
import { databaseConfig } from "../constants/database";

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const data = await database.listCollections(databaseConfig.databaseId);

    return res.json({ success: true, data });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error });
  }
};

export const getPlaceById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
