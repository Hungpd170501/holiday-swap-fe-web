import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function getPlan() {
  try {
    const axiosAuth = useAxiosAuth();
    const plan = await (await axiosAuth).get("/plan");

    if (!plan) {
      return null;
    }

    return plan.data;
  } catch (error) {}
}
