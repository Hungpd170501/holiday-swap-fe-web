import axios from "axios";

export default async function GetListApartment() {
  try {
    const listApartment = await axios.get(
      `${process.env.API_URL}/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=9&sortBy=id&sortDirection=asc`
    );

    if (!listApartment) {
      return null;
    }

    return listApartment.data;
  } catch (error) {}
}
