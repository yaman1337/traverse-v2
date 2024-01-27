"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const appwrite_sdk_1 = require("../appwrite-sdk");
const isLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorization = req.headers.authorization;
        if (!authorization)
            return res.status(400).json({
                success: false,
                error: "You are not authorized to view the requested resource.",
            });
        req.client = new appwrite_sdk_1.AppwriteClientWithJwt("");
        next();
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.isLoggedIn = isLoggedIn;
