import GetBookingHistoryById from '@/app/actions/getBookingHistoryById';
import BookingDetail from './BookingDetail';
import requireAuth from '@/app/libs/requireAuth';

interface IParams {
  bookingId: any;
}

export default async function BookingDetailPage({ params }: { params: IParams }) {
  const bookingDetail = await GetBookingHistoryById(params);
  console.log('check booking', bookingDetail);
  return requireAuth(
    <div>
      <div>
        Dashboard {'>'} <span>My Booking</span> {'>'}{' '}
        <span className="text-common">Booking Detail</span>
      </div>
      <div>
        <BookingDetail bookingDetail={bookingDetail} />
      </div>
    </div>,
    [2, 4]
  );
}
