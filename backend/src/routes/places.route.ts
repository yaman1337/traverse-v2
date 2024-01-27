import { Router } from "express";
import { routes } from "../constants/routes";
import {
  createPlace,
  getAllPlaces,
  getContributions,
  getPlaceById,
} from "../controllers";
import { isLoggedIn } from "../middlewares/auth.middleware";

export const placesRouter = Router();

placesRouter
  .get(routes.PLACES.GET_ALL_PLACES, getAllPlaces)
  .get(routes.PLACES.GET_PLACE_BY_ID, getPlaceById)
  .get(routes.PLACES.CONTRIBUTIONS, isLoggedIn, getContributions)
  .post(routes.PLACES.CREATE_PLACE, isLoggedIn, createPlace);
