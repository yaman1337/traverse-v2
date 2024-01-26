import { Router } from "express";
import { routes } from "../constants/routes";
import { LoginController, RegisterController } from "../controllers";

export const authRouter = Router();

authRouter
  .get("/", (_, res) => {
    res.send("Auth endpoint");
  })
  .get(routes.AUTH.REGISTER, RegisterController)
  .post(routes.AUTH.LOGIN, LoginController);
