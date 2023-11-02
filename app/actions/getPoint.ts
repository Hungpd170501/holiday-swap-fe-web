import { getServerSession } from "next-auth";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export default async function GetPoint() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const point = await axios.get(`${process.env.API_URL}/point`);

    console.log("Check point", point.data);

    if (!point) {
      return null;
    }

    return point.data;
  } catch (error) {}
}
