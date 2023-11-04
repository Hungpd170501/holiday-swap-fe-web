import axios from 'axios';

export default async function GetListMembership() {
  try {
    const memberships = await axios.get(
      `${process.env.API_URL}/users/search?roleIds=2&limit=50&offset=0&sortProps=id&sortDirection=asc`
    );

    if (!memberships) {
      return null;
    }

    return memberships.data;
  } catch (error) {}
}
