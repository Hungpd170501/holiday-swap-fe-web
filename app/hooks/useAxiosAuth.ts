import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

export async function getSession() {
  return await getServerSession(authOptions);
}

async function useAxiosAuth() {
  const session = await getSession();
  const accessToken = session?.user?.access_token;
  const BASE_URL = process.env.API_URL;

  // Create a new instance of Axios with the interceptor
  const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
  });

  axiosWithAuth.interceptors.request.use((config) => {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });

  return axiosWithAuth;
}

export default useAxiosAuth;
