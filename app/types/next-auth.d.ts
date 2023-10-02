import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      access_token: string;
      exp: number;
      iat: number;
      jti: string;
      refresh_token: string;
      email: string;
    };
  }
}
