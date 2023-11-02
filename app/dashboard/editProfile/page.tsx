import React from "react";
import requireAuth from "@/app/libs/requireAuth";

export const metadata = {
  title: "Edit Profile",
};

export default function EditProfile() {
  return requireAuth(
    <div>
      <div>
        Dashboard {">"} <span className="text-common">Edit profile</span>
      </div>
      <div className=" w-[600px] py-10">
        <div className="flex flex-row items-center w-full ">
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="/images/resort1.jpg"
              alt=""
            />
          </div>

          <div>
            <label
              htmlFor="profile-picture-input"
              className="bg-[#5C98F2] px-4 py-4 rounded-md text-white ml-[100px] cursor-pointer"
            >
              Change Profile Picture
            </label>
            <input
              type="file"
              id="profile-picture-input"
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="w-[700px]">
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">First Name*</div>
          <input
            type="text"
            placeholder="Thuc"
            value="Bùi"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Last Name*</div>
          <input
            type="text"
            placeholder="Thuc"
            value="Trí Thức"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className="flex flex-row items-center mb-10">
          <div className="w-[198px] text-gray-700">Gender</div>
          <select name="" id="" className=" text-gray-800 px-4 py-2">
            <option value="">-</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div className="flex flex-row items-center mb-14">
          <div className="w-[198px] text-gray-700">Birth of Date</div>
          <div className="flex flex-row ">
            <select
              className="text-gray-800 mr-[20px] px-4 py-3 bg-[#F8F8F8] border-b border-gray-500 border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
              name=""
              id=""
            >
              <option value="">10</option>
              <option value="">31</option>
              <option value="">30</option>
              <option value="">29</option>
              <option value="">28</option>
              <option value="">27</option>
              <option value="">26</option>
              <option value="">25</option>
              <option value="">24</option>
              <option value="">23</option>
              <option value="">22</option>
              <option value="">21</option>
              <option value="">20</option>
              <option value="">19</option>
              <option value="">18</option>
              <option value="">17</option>
              <option value="">16</option>
              <option value="">15</option>
              <option value="">14</option>
              <option value="">13</option>
              <option value="">12</option>
              <option value="">11</option>
              <option value="">10</option>
              <option value="">9</option>
              <option value="">8</option>
              <option value="">7</option>
              <option value="">6</option>
              <option value="">5</option>
              <option value="">4</option>
              <option value="">3</option>
              <option value="">2</option>
              <option value="">1</option>
            </select>
            <select className=" text-gray-800 mr-[20px] px-4 py-3 bg-[#F8F8F8] border-b border-gray-500 border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent">
              <option value="">December</option>
              <option value="">November</option>
              <option value="">October</option>
              <option value="">September</option>
              <option value="">August</option>
              <option value="">July</option>
              <option value="">June</option>
              <option value="">May</option>
              <option value="">April</option>
              <option value="">March</option>
              <option value="">February</option>
              <option value="">January</option>
            </select>

            <select className=" text-gray-800 mr-[20px] px-4 py-3 bg-[#F8F8F8] border-b border-gray-500 border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent">
              <option value="">2001</option>
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017 </option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              <option value="">2009</option>
              <option value="">2008</option>
              <option value="">2007</option>
            </select>
          </div>
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Email*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="buitrithuc1008@gmail.com"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Phone*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="0856597778"
            className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div>
          <button className="bg-[#5C98F2] px-4 py-3 rounded-md text-white hover:bg-blue-500">
            Update Profile
          </button>
        </div>
      </div>
    </div>,
    [2]
  );
}
