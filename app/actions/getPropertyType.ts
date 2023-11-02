import axios from "axios";

export default async function GetPropertyType() {
  try {
    const propertyType = await axios.get(
      `${process.env.API_URL}/property-types?pageNo=0&pageSize=20&sortBy=id`
    );

    if (!propertyType) {
      return null;
    }

    return propertyType.data.content;
  } catch (error) {}
}
