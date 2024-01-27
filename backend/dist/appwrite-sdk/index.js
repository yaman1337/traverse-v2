"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppwriteClientWithJwt = exports.storage = exports.account = exports.database = exports.AppwriteClient = void 0;
const node_appwrite_1 = __importDefault(require("node-appwrite"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY } = process.env;
exports.AppwriteClient = new node_appwrite_1.default.Client();
exports.AppwriteClient.setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);
exports.database = new node_appwrite_1.default.Databases(exports.AppwriteClient);
exports.account = new node_appwrite_1.default.Databases(exports.AppwriteClient);
exports.storage = new node_appwrite_1.default.Databases(exports.AppwriteClient);
class AppwriteClientWithJwt {
    constructor(jwt) {
        this.jwt = jwt;
        this.client = exports.AppwriteClient.setJWT(this.jwt);
    }
    getDatabase() {
        return new node_appwrite_1.default.Databases(this.client);
    }
    getAccount() {
        return new node_appwrite_1.default.Account(this.client);
    }
    getStorage() {
        return new node_appwrite_1.default.Storage(this.client);
    }
}
exports.AppwriteClientWithJwt = AppwriteClientWithJwt;
