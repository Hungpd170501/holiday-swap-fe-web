import axios from 'axios';

export default async function GetListIssue() {
  try {
    const issue = await axios.get(`${process.env.API_URL}/issues-booking/get-all-issue-booking`);

    if (!issue) {
      return null;
    }

    return issue.data;
  } catch (error) {}
}
