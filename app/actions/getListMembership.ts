import axios from 'axios';

export default async function GetListMembership() {
  try {
    const memberships = await axios.get(
      `${process.env.API_URL}/users/search?status=ACTIVE&status=BLOCKED&roleIds=2&limit=10&offset=0&sortProps=id&sortDirection=desc`
    );

    if (!memberships) {
      return null;
    }

    return memberships.data;
  } catch (error) {}
}
