import sdk, { Client } from "node-appwrite";
import dotenv from "dotenv";

dotenv.config();

const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY } =
  process.env;

export const AppwriteClient = new sdk.Client();

AppwriteClient.setEndpoint(APPWRITE_ENDPOINT as string)
  .setProject(APPWRITE_PROJECT_ID as string)
  .setKey(APPWRITE_API_KEY as string);

export const database = new sdk.Databases(AppwriteClient);
export const account = new sdk.Databases(AppwriteClient);
export const storage = new sdk.Databases(AppwriteClient);

export class AppwriteClientWithJwt {
  jwt: string;
  client: Client;

  constructor(jwt: string) {
    this.jwt = jwt;
    this.client = new sdk.Client()
      .setEndpoint(APPWRITE_ENDPOINT as string)
      .setProject(APPWRITE_PROJECT_ID as string)
      .setJWT(this.jwt);
  }

  getDatabase() {
    return new sdk.Databases(this.client);
  }

  getAccount() {
    return new sdk.Account(this.client);
  }

  getStorage() {
    return new sdk.Storage(this.client);
  }

  getUsers() {
    return new sdk.Users(this.client);
  }
}
