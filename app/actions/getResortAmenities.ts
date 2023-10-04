import axios from "axios";

export default async function getResortAmenities() {
  try {
    const amenities = await axios.get(
      `${process.env.API_URL}/resort-amenity-types?pageNo=0&pageSize=20&sortBy=id`
    );

    if (!amenities) {
      return null;
    }

    return amenities.data;
  } catch (error) {}
}
