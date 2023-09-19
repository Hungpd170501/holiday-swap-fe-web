import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session) {
      return null;
    }

    const accessToken = session.user.access_token;

    if (!accessToken) {
      return null;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const currentUser = await axios.get(`${process.env.API_URL}/user/profile`, {
      headers,
    });

    if (!currentUser) {
      return null;
    }

    return currentUser.data;
  } catch (error: any) {}
}
