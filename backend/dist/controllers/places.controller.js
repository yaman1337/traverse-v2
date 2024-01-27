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
exports.createPlace = exports.getPlaceById = exports.getAllPlaces = void 0;
const appwrite_sdk_1 = require("../appwrite-sdk");
const database_1 = require("../constants/database");
const node_appwrite_1 = require("node-appwrite");
const getAllPlaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield appwrite_sdk_1.database.listDocuments(database_1.databaseConfig.databaseId, database_1.databaseConfig.placesCollectionId);
        return res.json({ success: true, data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
    }
});
exports.getAllPlaces = getAllPlaces;
const getPlaceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield appwrite_sdk_1.database.listDocuments(database_1.databaseConfig.databaseId, database_1.databaseConfig.placesCollectionId, [node_appwrite_1.Query.equal("$id", id)]);
        return res.json({ success: true, data });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.getPlaceById = getPlaceById;
const createPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.createPlace = createPlace;
