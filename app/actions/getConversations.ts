import useAxiosAuth from "../hooks/useAxiosAuth";
import useAxiosAuthClient from "../hooks/useAxiosAuthClient";

export default async function GetConversations() {
  try {
    const axiosAuth = useAxiosAuth();

    const conversations = await (
      await axiosAuth
    ).get("/conversation/current-user");

    console.log("Conversations", conversations.data);

    if (!conversations) {
      return null;
    }

    return conversations.data;
  } catch (error: any) {}
}
