"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placesRouter = void 0;
const express_1 = require("express");
const routes_1 = require("../constants/routes");
const controllers_1 = require("../controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.placesRouter = (0, express_1.Router)();
exports.placesRouter
    .get(routes_1.routes.PLACES.GET_ALL_PLACES, controllers_1.getAllPlaces)
    .get(routes_1.routes.PLACES.GET_PLACE_BY_ID, controllers_1.getPlaceById)
    .post(routes_1.routes.PLACES.CREATE_PLACE, auth_middleware_1.isLoggedIn, controllers_1.createPlace);
