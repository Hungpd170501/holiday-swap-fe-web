import useAxiosAuth from "../hooks/useAxiosAuth";

interface IParams {
  bookingId: any;
}

export default async function GetBookingHistoryById(params: IParams) {
  try {
    const axiosAuth = useAxiosAuth();
    const { bookingId } = params;
    const bookingDetail = await (
      await axiosAuth
    ).get(`https://holiday-swap.click/api/booking/historybooking/${bookingId}`);

    if (!bookingDetail) {
      return null;
    }

    return bookingDetail.data;
  } catch (error) {}
}
