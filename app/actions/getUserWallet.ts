import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function GetUserWallet() {
  try {
    const axiosAuth = useAxiosAuth();

    const userWallet = await (await axiosAuth).get(`/point/user_wallet`);

    if (!userWallet) {
      return null;
    }

    return userWallet.data;
  } catch (error) {}
}
