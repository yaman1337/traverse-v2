import { Router } from "express";
import { routes } from "../constants/routes";
import { createReview, getAllReviews } from "../controllers";
import { isLoggedIn } from "../middlewares/auth.middleware";

export const reviewsRouter = Router();

reviewsRouter
  .get(routes.REVIEWS.GET_ALL_REVIEWS, getAllReviews)
  .post(routes.REVIEWS.CREATE, isLoggedIn, createReview);
