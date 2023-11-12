'use client';

import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';

const ApartmentReivewBoxModal = () => {
  return (
    <div className="flex flex-col py-4">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/images/placeholder.jpg"
          width={30}
          height={30}
          alt="Avatar"
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-black text-sm">Phu Hung</p>
          <p className="text-slate-400 text-sm">6 years on HolidaySwap</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <ReactStars count={5} size={10} color2="black" value={4} />
        <div>·</div>
        <div className="text-xs text-black">3 weeks ago</div>
      </div>

      <div className="text-sm font-normal">
        I feel like at home when I stay at Mingshus house. I like to chat with her lovely 7 year-
        old son. The location is very good: near grocery stores and bus stop (5min walk) and
        Cricklewood underground station (10min walk). The room is cozy and clean, my deluxe double
        room has a nice view. I had a pleasant stay in Greater London. I will book Mingshus house
        again if I travel to London next time. I feel like at home when I stay at Mingshus house. I
        like to chat with her lovely 7 year- old son. The location is very good: near grocery stores
        and bus stop (5min walk) and Cricklewood underground station (10min walk). The room is cozy
        and clean, my deluxe double room has a nice view. I had a pleasant stay in Greater London. I
        will book Mingshus house again if I travel to London next time.
      </div>
    </div>
  );
};

export default ApartmentReivewBoxModal;
