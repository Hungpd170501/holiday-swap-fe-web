import axios from 'axios';

export default async function GetPropertyTypeStaff() {
  try {
    const propertyTypes = await axios.get(
      `${process.env.API_URL}/property-types?pageNo=0&pageSize=10&sortDirection=desc&sortBy=id`
    );

    if (!propertyTypes) {
      return null;
    }

    return propertyTypes.data;
  } catch (error) {}
}
