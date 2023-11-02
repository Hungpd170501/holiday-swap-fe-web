import axios from "axios";

export default async function GetListApartment() {
  try {
    const listApartment = await axios.get(
      `${process.env.API_URL}/apartment-for-rent?pageNo=0&pageSize=9&sortBy=id&sortDirection=asc`
    );

    if (!listApartment) {
      return null;
    }

    return listApartment.data;
  } catch (error) {}
}
