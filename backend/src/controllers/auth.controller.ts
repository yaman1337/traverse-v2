import { Request, Response } from "express";
import { createAccount, login } from "../services";

export const RegisterController = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const LoginController = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
