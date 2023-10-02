import axios from "axios";

export default async function getListResort() {
  try {
    const listResort = await axios.get(
      `${process.env.API_URL}/resorts?pageNo=0&pageSize=10`
    );

    if (!listResort) {
      return null;
    }

    return listResort.data;
  } catch (error) {}
}
