import dotenv from "dotenv";

dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT || 4000;
export const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID as string;
export const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET as string;
export const FACEBOOK_CALLBACK_URL = process.env
  .FACEBOOK_CALLBACK_URL as string;
export const SESSION_SECRET = process.env.SESSION_SECRET as string;
