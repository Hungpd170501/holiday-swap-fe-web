import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function getPoint() {
  try {
    const axiosAuth = useAxiosAuth();
    const point = await (await axiosAuth).get("/point");

    if (!point) {
      return null;
    }

    return point.data;
  } catch (error) {}
}
