import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function getCurrentUser() {
  try {
    const axiosAuth = useAxiosAuth();
    // const session = await getSession();

    // if (!session) {
    //   return null;
    // }

    // const accessToken = session.user.access_token;

    // if (!accessToken) {
    //   return null;
    // }

    // const headers = {
    //   Authorization: `Bearer ${accessToken}`,
    // };

    const currentUser = await (await axiosAuth).get("/user/profile");

    if (!currentUser) {
      return null;
    }

    return currentUser.data;
  } catch (error: any) {
    console.log("Error: ", error);
  }
}
