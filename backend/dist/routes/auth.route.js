"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const routes_1 = require("../constants/routes");
const controllers_1 = require("../controllers");
exports.authRouter = (0, express_1.Router)();
exports.authRouter
    .get("/", (_, res) => {
    res.send("Auth endpoint");
})
    .get(routes_1.routes.AUTH.REGISTER, controllers_1.RegisterController)
    .post(routes_1.routes.AUTH.LOGIN, controllers_1.LoginController);
