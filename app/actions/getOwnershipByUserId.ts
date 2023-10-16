import useAxiosAuth from "../hooks/useAxiosAuth";
import GetCurrentUser from "./getCurrentUser";
import axios from "axios";

export default async function getOwnershipByUserId() {
  try {
    const currentUser = await GetCurrentUser();
    const ownership = await axios.get(
      `https://holiday-swap.click/api/co-owners/users?userId=${currentUser.userId}`
    );

    if (!ownership) {
      return null;
    }

    return ownership.data;
  } catch (error) {}
}
