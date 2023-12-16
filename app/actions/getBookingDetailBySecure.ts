import axios from 'axios';

interface IParams {
  bookingId: any;
}

export default async function GetBookingDetailBySecure(params: IParams) {
  try {
    const { bookingId } = params;
    const bookingDetail = await axios.get(
      `https://holiday-swap.click/api/booking/getqrcode/${bookingId}`
    );

    if (!bookingDetail) {
      return null;
    }

    return bookingDetail.data;
  } catch (error) {}
}
