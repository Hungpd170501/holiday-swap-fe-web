import axios from "axios";

export default async function getInRoomAmenities() {
  try {
    const inRoomAmenities = await axios.get(
      `${process.env.API_URL}/in-room-amenities?pageNo=0&pageSize=50&sortBy=id`
    );

    if (!inRoomAmenities) {
      return null;
    }

    return inRoomAmenities.data;
  } catch (error) {}
}
