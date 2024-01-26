import { Client, Account, Databases, Storage } from "appwrite";

export const appwriteClient = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65b428e1c9b4c20e6cde");

export const account = new Account(appwriteClient);
export const database = new Databases(appwriteClient);
export const storage = new Storage(appwriteClient);