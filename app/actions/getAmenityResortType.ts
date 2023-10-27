import axios from "axios";

export default async function GetAmenityResortType() {
  try {
    const amenityResortType = await axios.get(
      `${process.env.API_URL}/resort-amenity-types?pageNo=0&pageSize=20&sortBy=id`
    );

    if (!amenityResortType) {
      return null;
    }

    return amenityResortType.data.content;
  } catch (error) {}
}
