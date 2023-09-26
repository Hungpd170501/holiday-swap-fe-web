import Link from "next/link";
import React from "react";
import CurrentBooking from "./CurrentBooking";

interface MyProfileProps {
  currentUser?: any | null;
}

const MyProfile: React.FC<MyProfileProps> = ({ currentUser }) => {
  return (
    <div>
      <div className="bg-gray-200 w-auto h-auto rounded-lg">
        <div className="px-10 py-10">
          <div className="flex flex-row justify-between items-center pb-10">
            <div className="text-[20px] font-bold text-common">My Profile</div>
            <Link href="/#">Edit profile</Link>
          </div>
          <div className="flex flex-row">
            <img
              className="rounded-full w-16 h-16 mr-10"
              src="./images/resort1.jpg"
              alt=""
            />
            <div className="flex flex-row ">
              <div className="flex flex-col mr-10 text-gray-400">
                <div>Name</div>
                <div>Birth Date</div>
                <div>Email</div>
              </div>
              <div className="flex flex-col mr-16 text-gray-600">
                <div>{currentUser?.username}</div>
                <div>{currentUser?.dob}</div>
                <div>{currentUser?.email}</div>
              </div>
              <div className="flex flex-col mr-10 text-gray-400">
                <div>Gender</div>
                <div> Country</div>
                <div> Phone</div>
              </div>
              <div className="flex flex-col text-gray-600">
                <div>{currentUser?.gender}</div>
                <div>VietNam</div>
                <div>{currentUser?.phone}</div>
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
