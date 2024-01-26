import sdk, { Client } from "node-appwrite";
import appwrite from "appwrite";

const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY } =
  process.env;

const appwriteClientInstance = new sdk.Client();

appwriteClientInstance
  .setEndpoint(APPWRITE_ENDPOINT as string)
  .setProject(APPWRITE_PROJECT_ID as string);

export class AppwriteClient {
  jwt: string;
  client: Client;

  constructor(jwt: string) {
    this.jwt = jwt;
    this.client = appwriteClientInstance.setJWT(this.jwt);
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
}
