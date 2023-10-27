import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function GetPoint() {
  try {
    const axiosAuth = useAxiosAuth();
    const point = await (await axiosAuth).get("/point");

    console.log("Check point", point.data);

    if (!point) {
      return null;
    }

    return point.data;
  } catch (error) {}
}
