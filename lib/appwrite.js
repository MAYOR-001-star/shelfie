import { Client, Account, Avatars, Databases } from "appwrite";
import Constants from "expo-constants";

const {
  APPWRITE_PROJECT_ID,
  APPWRITE_PUBLIC_ENDPOINT
} = Constants.expoConfig.extra;

const client = new Client()
  .setEndpoint(APPWRITE_PUBLIC_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client)

export default client;
