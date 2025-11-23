import { APPWRITE_PROJECT_ID, APPWRITE_PUBLIC_ENDPOINT } from '@env';
import { Client, Account , Avatars} from 'appwrite';

const client = new Client()
  .setEndpoint(APPWRITE_PUBLIC_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const avatars = new Avatars(client);
export default client;
