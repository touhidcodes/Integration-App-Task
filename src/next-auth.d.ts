/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

// Extend the default Session type to include the accessToken
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
  }
}
