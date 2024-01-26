import { Router } from "express";
import { routes } from "../constants/routes";
import { getAllPlaces, getPlaceById } from "../controllers";

export const placesRouter = Router();

placesRouter
  .get(routes.PLACES.GET_ALL_PLACES, getAllPlaces)
  .get(routes.PLACES.GET_PLACE_BY_ID, getPlaceById);
