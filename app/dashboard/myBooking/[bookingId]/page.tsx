import getBookingHistoryById from "@/app/actions/getBookingHistoryById";
import BookingDetail from "./BookingDetail";

interface IParams {
  bookingId: any;
}

export default async function BookingDetailPage({
  params,
}: {
  params: IParams;
}) {
  const bookingDetail = await getBookingHistoryById(params);
  console.log("check booking", bookingDetail);
  return (
    <div>
      <div>
        Dashboard {">"} <span>My Booking</span> {">"}{" "}
        <span className="text-common">Booking Detail</span>
      </div>
      <div>
        <BookingDetail />
      </div>
    </div>
  );
}
