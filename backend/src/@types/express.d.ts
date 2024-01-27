import { Request } from "express";
import { AppwriteClientWithJwt } from "../appwrite-sdk";

interface CustomRequest extends Request {
    client?: AppwriteClientWithJwt
}