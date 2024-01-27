"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = {
    AUTH: {
        LOGIN: "/login",
        REGISTER: "/register"
    },
    PLACES: {
        GET_ALL_PLACES: "/all",
        GET_PLACE_BY_ID: "/:id",
        CREATE_PLACE: "/create"
    }
};
