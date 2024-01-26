import { NextFunction, Request, Response } from "express";
import { AppwriteClient } from "../appwrite-sdk";

interface AuthMiddlewareRequest extends Request {
  client: AppwriteClient;
}

export const isLoggedIn = async (
  req: AuthMiddlewareRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization)
      return res
        .status(400)
        .json({
          success: false,
          error: "You are not authorized to view the requested resource.",
        });

    req.client = new AppwriteClient(authorization);
    next();
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
