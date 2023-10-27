import useAxiosAuth from "../hooks/useAxiosAuth";
import GetCurrentUser from "./getCurrentUser";

export default async function GetTransfer() {
  try {
    const axiosAuth = useAxiosAuth();
    const currentUser = await GetCurrentUser();

    const transfer = await (
      await axiosAuth
    ).get(`transfer?userId=${currentUser?.userId}`);

    if (!transfer) {
      return null;
    }

    return transfer.data;
  } catch (error) {}
}
