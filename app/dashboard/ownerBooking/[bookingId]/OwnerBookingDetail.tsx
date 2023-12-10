'use client';

import GetOwnerHistoryBookingById from '@/app/actions/getOwnerHistoryBookingById';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import axios from 'axios';
import { differenceInDays, format } from 'date-fns';
import { Button, Card, Modal } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactStars from 'react-stars';

interface OwnerBookingDetailProps {
  ownerBookingDetail: any;
  memberBooking: any;
  ownerResort: any;
  ownerBookingDetailId: any;
  rating: any;
}

const OwnerBookingDetail: React.FC<OwnerBookingDetailProps> = ({
  ownerBookingDetail,
  memberBooking,
  ownerResort,
  ownerBookingDetailId,
  rating,
}) => {
  const [detail, setDetail] = useState(ownerBookingDetail);
  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

  const axiosAuthClient = useAxiosAuthClient();
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();

  const { bookingId } = ownerBookingDetailId;

  const handleCancelBooking = () => {
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    axiosAuthClient
      .put(`https://holiday-swap.click/api/booking/cancel/${bookingId}`)
      .then(async (response) => {
        const newDetail = await axios.get(
          `https://holiday-swap.click/api/booking/ownerhistorybooking/${bookingId}`,
          config
        );
        if (newDetail) {
          setDetail(newDetail.data);
        }
        toast.success('Cancel booking successfully!');
        setOpenModal(false);
      })
      .catch((response) => {
        toast.error(response?.response?.data?.message ?? 'Something went wrong');
        setOpenModal(false);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 py-3 gap-10 border-b border-slate-300">
        <div className="w-full h-full">
          {/* Title */}
          <div className="py-3">
            <div className="text-2xl font-bold mb-3">Your owner booking is successfully!</div>
            <div className="text-lg text-slate-500">
              You are going to <span className="font-bold"> {detail?.resortName} </span>
            </div>
            <div className="text-sm text-slate-500 mt-2">
              {format(new Date(detail?.createdDate), "dd/MM/yyyy 'at' h:mm a")}
            </div>
          </div>

          {/* Information ownership */}
          <div className="flex flex-row gap-3 py-3">
            <div>
              <Image
                src="/images/placeholder.jpg"
                alt="avatar"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <div>{memberBooking?.content[0].fullName}</div>
              <div className="text-slate-500">
                {ownerResort?.content[0]?.addressLine
                  .split(',')
                  .map((part: any) => part.trim())
                  .slice(-2)
                  .join(', ')}
              </div>
              {/* <div className="text-slate-500">On HolidaySwap since 2015</div> */}
            </div>
          </div>

          {/* Image apartment */}
          <div className="py-3 w-full h-80 relative rounded-lg">
            <Image src={detail?.propertyImage} fill alt="resort" className="absolute rounded-lg" />
          </div>

          {/* Information apartment */}
          <div className="py-3">
            <div className="text-xl">{detail?.propertyName}</div>
            <div className="text-slate-400">Description</div>
          </div>

          {detail?.canCancel === true ? (
            <div className="py-3">
              <button
                onClick={() => setOpenModal(true)}
                type="button"
                className="p-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white text-lg"
              >
                Cancel booking
              </button>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="w-full h-full py-5">
          {/* Check-in Check-out */}
          <div className="py-3 border-b border-slate-300 flex flex-row items-center justify-between">
            <div className="flex flex-col text-lg text-slate-500">
              <div>{format(new Date(detail?.dateCheckIn), 'E')}, </div>
              <div>{format(new Date(detail?.dateCheckIn), 'MMM dd, yyyy')}</div>
              <div>Check-in After 2PM</div>
            </div>
            <div className="flex flex-col text-lg text-slate-500">
              <div>{format(new Date(detail?.dateCheckOut), 'E')}, </div>
              <div>{format(new Date(detail?.dateCheckOut), 'MMM dd, yyyy')}</div>
              <div>Check-out Before 12PM</div>
            </div>
          </div>

          {/* Guest */}
          <div className="py-3 flex flex-col text-slate-500 border-b border-slate-300">
            <div className="text-lg font-bold text-slate-600">Guests</div>
            <div>{detail?.userOfBooking.length}</div>
          </div>

          {/* Payment */}
          <div className="py-3 flex flex-col border-b border-slate-300">
            <div className="text-lg font-bold text-slate-600">Income</div>
            <div className="flex flex-col gap-2 py-3">
              <div className="flex flex-row justify-between items-center text-slate-500">
                <div>
                  {detail?.price /
                    calculateNightDifference(detail?.dateCheckIn, detail?.dateCheckOut)}{' '}
                  point x {calculateNightDifference(detail?.dateCheckIn, detail?.dateCheckOut)}{' '}
                  nights
                </div>
                <div>{detail?.price}</div>
              </div>

              <div className="flex flex-row justify-between items-center text-slate-500">
                <div>
                  <span className="text-black">
                    Holiday<span className="text-common">Swap</span>
                  </span>{' '}
                  service fee
                </div>
                <div className="text-rose-500">- {(detail?.price * (10 / 100)).toFixed(1)}</div>
              </div>
            </div>
          </div>

          {/* Total payment */}
          <div className="py-3 flex flex-row items-center justify-between border-b border-slate-300">
            <div>Total received</div>
            <div>{detail?.total}</div>
          </div>

          {/* Information guest */}
          <div className="py-3">
            <div className="text-lg font-bold text-slate-600">Information Guest</div>
            <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-3">
              {detail?.userOfBooking.map((item: any, index: number) => (
                <Card key={item.id} href="#" className="max-w-sm">
                  <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.fullName}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.phoneNumber}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {rating && (
        <div className="flex flex-col py-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={
                rating?.ratingType === 'PUBLIC'
                  ? rating?.user?.avatar || '/images/placeholder.jpg'
                  : '/images/placeholder.jpg'
              }
              width={50}
              height={50}
              alt="Avatar"
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="text-black text-base">
                {rating?.ratingType === 'PRIVATE' ? 'Anonymous users' : rating?.user?.fullName}
              </p>
              <p className="text-slate-400 text-base">6 years on HolidaySwap</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <ReactStars count={5} size={15} color2="orange" value={rating?.rating} />
            <div>·</div>
            <div className="text-sm text-black">3 weeks ago</div>
          </div>

          <div className="text-base font-normal line-clamp-3">{rating?.comment}</div>
        </div>
      )}

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Cancel Booking</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you want to cancel booking
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button color="red" className="font-bold text-lg" onClick={handleCancelBooking}>
            Continue
          </Button>
          <Button color="gray" className="text-lg" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OwnerBookingDetail;
