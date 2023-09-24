import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function GetCurrentUser() {
  try {
    const axiosAuth = useAxiosAuth();

    const currentUser = await (await axiosAuth).get("/user/profile");

    if (!currentUser) {
      return null;
    }

    return currentUser.data;
  } catch (error: any) {
    console.log("Error: ", error);
  }
}
