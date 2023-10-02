import Link from "next/link";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

export default function CardApartmentType() {
  return (
    <div className=" w-full px-10">
      <div className="flex flex-col ">
        <div className="flex flex-row items-center w-full justify-between mb-10">
          <Link
            href="/typeapartment/luxurytype"
            className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
          >
            <div className="overflow-hidden object-cover">
              <img
                className="object-cover h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                src="/images/resort3.jpg"
                alt=""
              />
            </div>{" "}
            <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
              <div>From: </div>
              <span className="ml-1"> $90</span>
            </div>
            <div className="py-5 px-5">
              <div className="py-5 text-[25px]">Luxury Suite</div>
              <div className="text-gray-500 pb-5">
                Our Suites has been honored with the prestigious Five-Star Award
                by Forbes.
              </div>
              <div className="flex flex-row items-center py-2 ">
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <span className="pl-1">(1 Review)</span>
              </div>
              <Link
                className="hover:border-b hover:border-gray-700 mb-5"
                href="#"
              >
                Book Now
              </Link>
            </div>
          </Link>
          <Link
            href="typeapartment/deluxetype"
            className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
          >
            <div className="flex flex-row justify-end  ">
              <div className="overflow-hidden object-cover">
                <img
                  className="object-coveh-[250px]r  relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                  src="/images/resort2.jpg"
                  alt=""
                />
              </div>
              <div className="bg-common rounded-lg absolute w-auto h-auto px-3 mt-5 mr-5 py-1 text-white">
                17% Off
              </div>
            </div>
            <div className="bg-black  items-center w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
              <div>From: </div>
              <div>
                <span className="ml-1 line-through text-gray-400 text-[15px] mr-2 ">
                  {" "}
                  $90
                </span>
                <span>$75</span>
              </div>
            </div>
            <div className="py-5 px-5">
              <div className="py-5 text-[25px]">Standard Deluxe</div>
              <div className="text-gray-500 pb-5">
                Our Suites has been honored with the prestigious Five-Star Award
                by Forbes.
              </div>
              <div className="flex flex-row items-center py-2 ">
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <span className="pl-1">(1 Review)</span>
              </div>
              <Link
                className="hover:border-b hover:border-gray-700 mb-5"
                href="typeapartment/deluxetype"
              >
                Book Now
              </Link>
            </div>
          </Link>
          <Link
            href="/typeapartment/penthousetype"
            className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
          >
            <div className="overflow-hidden object-cover">
              <img
                className="object-cover w-full h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                src="/images/resort1.jpg"
                alt=""
              />
            </div>
            <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
              <div>From: </div>
              <span className="ml-1"> $200</span>
            </div>
            <div className="py-5 px-5">
              <div className="py-5 text-[25px]">The Penthouse</div>
              <div className="text-gray-500 pb-5">
                Our Suites has been honored with the prestigious Five-Star Award
                by Forbes.
              </div>
              <div className="flex flex-row items-center py-2 ">
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <span className="pl-1">(1 Review)</span>
              </div>
              <Link
                className="hover:border-b hover:border-gray-700 mb-5"
                href="/typeapartment/penthousetype"
              >
                Book Now
              </Link>
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <Link
            href="typeapartment/deluxetype"
            className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
          >
            <div className="flex flex-row justify-end  ">
              <div className="overflow-hidden object-cover">
                <img
                  className="object-coveh-[250px]r  relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                  src="/images/resort2.jpg"
                  alt=""
                />
              </div>
              <div className="bg-common rounded-lg absolute w-auto h-auto px-3 mt-5 mr-5 py-1 text-white">
                17% Off
              </div>
            </div>
            <div className="bg-black  items-center w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
              <div>From: </div>
              <div>
                <span className="ml-1 line-through text-gray-400 text-[15px] mr-2 ">
                  {" "}
                  $90
                </span>
                <span>$75</span>
              </div>
            </div>
            <div className="py-5 px-5">
              <div className="py-5 text-[25px]">Standard Deluxe</div>
              <div className="text-gray-500 pb-5">
                Our Suites has been honored with the prestigious Five-Star Award
                by Forbes.
              </div>
              <div className="flex flex-row items-center py-2 ">
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <span className="pl-1">(1 Review)</span>
              </div>
              <Link
                className="hover:border-b hover:border-gray-700 mb-5"
                href="typeapartment/deluxetype"
              >
                Book Now
              </Link>
            </div>
          </Link>
          <Link
            href="/typeapartment/gransuitetype"
            className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
          >
            <div className="overflow-hidden object-cover">
              <img
                className="object-cover w-full h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                src="/images/resort5.jpg"
                alt=""
              />
            </div>
            <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
              <div>From: </div>
              <span className="ml-1"> $90</span>
            </div>
            <div className="py-5 px-5">
              <div className="py-5 text-[25px]">Grand Suite Room</div>
              <div className="text-gray-500 pb-5">
                Our Suites has been honored with the prestigious Five-Star Award
                by Forbes.
              </div>
              <div className="flex flex-row items-center py-2 ">
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <span className="pl-1">(1 Review)</span>
              </div>
              <Link
                className="hover:border-b hover:border-gray-700 mb-5"
                href="/typeapartment/gransuitetype"
              >
                Book Now
              </Link>
            </div>
          </Link>

          <Link
            href="/typeapartment/standardtype"
            className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
          >
            <div className="overflow-hidden object-cover">
              <img
                className="object-cover w-full h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                src="/images/resort6.jpg"
                alt=""
              />
            </div>
            <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
              <div>From: </div>
              <span className="ml-1"> $90</span>
            </div>
            <div className="py-5 px-5">
              <div className="py-5 text-[25px]">Standard Room</div>
              <div className="text-gray-500 pb-5">
                Our Suites has been honored with the prestigious Five-Star Award
                by Forbes.
              </div>
              <div className="flex flex-row items-center py-2 ">
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <AiTwotoneStar color="orange" />
                <span className="pl-1">(1 Review)</span>
              </div>
              <Link
                className="hover:border-b hover:border-gray-700 mb-5"
                href="/typeapartment/standardtype"
              >
                Book Now
              </Link>
            </div>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
