import axios from "axios";

interface IParams {
  propertyId?: string;
}

export default async function getPropertyById(params: IParams) {
  try {
    const { propertyId } = params;

    const property = await axios.get(
      `${process.env.API_URL}/property-types/${propertyId}`
    );

    if (!property) {
      return null;
    }

    return property.data;
  } catch (error) {}
}
