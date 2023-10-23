import Link from "next/link";
import React from "react";
import CurrentBooking from "./CurrentBooking";

interface MyProfileProps {
  currentUser?: any | null;
}

const MyProfile: React.FC<MyProfileProps> = ({ currentUser }) => {
  return (
    <div>
      <div className="bg-gray-200 w-auto h-auto rounded-lg px-20 pt-14">
        <div>
          <div className="flex flex-row justify-between items-center pb-10">
            <div className="text-[20px] font-bold text-common">My Profile</div>
          </div>
          <div className="flex flex-row">
            <img
              className="rounded-full w-24 h-24 mr-10"
              src="./images/resort1.jpg"
              alt=""
            />
            <div className="flex flex-row mb-14 ">
              <div className="flex flex-col mr-10 text-gray-400 ">
                <div className="mb-5">Name</div>
                <div className="mb-5">Birth Date</div>
                <div className="mb-5">Email</div>
              </div>
              <div className="flex flex-col mr-16 text-gray-600 ">
                <div className="mb-5 ml-9">{currentUser?.username}</div>
                <div className="mb-5 ml-9">{currentUser?.dob}</div>
                <div className="mb-5 ml-9">{currentUser?.email}</div>
              </div>
              <div className="flex flex-col mr-10 text-gray-400 ">
                <div className="mb-5 ml-9">Gender</div>
                <div className="mb-5 ml-9"> Country</div>
                <div className="mb-5 ml-9"> Phone</div>
              </div>
              <div className="flex flex-col text-gray-600 ">
                <div className="mb-5 ml-9">{currentUser?.gender}</div>
                <div className="mb-5 ml-9">VietNam</div>
                <div className="mb-5 ml-9">{currentUser?.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CurrentBooking />
    </div>
  );
};

export default MyProfile;
