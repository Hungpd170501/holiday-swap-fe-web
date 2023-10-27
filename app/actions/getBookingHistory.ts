import useAxiosAuth from "../hooks/useAxiosAuth";

export default async function GetBookingHistory() {
  try {
    const axiosAuth = useAxiosAuth();
    const historyBooking = await (
      await axiosAuth
    ).get("https://holiday-swap.click/api/booking/historybooking");

    if (!historyBooking) {
      return null;
    }

    return historyBooking.data;
  } catch (error) {}
}
