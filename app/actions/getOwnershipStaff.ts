import useAxiosAuth from "../hooks/useAxiosAuth";
import GetCurrentUser from "./getCurrentUser";
import axios from "axios";

export default async function getOwnershipStaff() {
  try {
    const currentUser = await GetCurrentUser();
    const ownership = await axios.get(
      `https://holiday-swap.click/api/co-owners?pageNo=0&pageSize=50&sortBy=property_id`
    );

    if (!ownership) {
      return null;
    }

    return ownership.data;
  } catch (error) {}
}
