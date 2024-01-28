import { NextFunction, Request, RequestHandler, Response } from "express";
import { AppwriteClientWithJwt } from "../appwrite-sdk";
import { CustomRequest } from "../@types/express";

export const isLoggedIn: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization?.split(" ")[1];
    if (!authorization)
      return res.status(400).json({
        success: false,
        error: "You are not authorized to view the requested resource.",
      });
    req.client = new AppwriteClientWithJwt(authorization);
    next();
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
