"use client";

import React, { useState, useMemo } from "react";
import Input from "../input/Input";
import Link from "next/link";
import BtnRegister from "./BtnRegister";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Container from "../Container";
import { LuWarehouse } from "react-icons/lu";
import {
  MdApartment,
  MdOutlineBedroomParent,
  MdOutlineBathroom,
  MdSingleBed,
  MdOutlineCrib,
} from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { GiPersonInBed } from "react-icons/gi";
import dynamic from "next/dynamic";
import HeadingRegister from "../HeadingRegister";
import HomeType from "./HomeType";
import Location from "./Location";
import HomeSize from "./HomeSize";
import People from "./People";
import Amenities from "./Amenities";
import Describe from "./Describe";
import Image from "next/image";
import TimeAvailable from "./TimeAvailable";
import Images from "./Images";

enum STEPS {
  INFO = 0,
  HOMETYPE = 1,
  LOCATION = 2,
  HOMESIZE = 3,
  PEOPLE = 4,
  AMENITIES = 5,
  DESCRIBE = 6,
  TIMEAVAILABLE = 7,
  IMAGES = 8,
  CREATED = 9,
  ACTIVEMEMBERSHIP = 10,
}

export const homeTypes = [
  {
    label: "House",
    icon: LuWarehouse,
  },
  {
    label: "Apartment",
    icon: MdApartment,
  },
];

export const residenceTypes = [
  {
    label: "Primary",
    icon: HiOutlineHomeModern,
  },
  {
    label: "Secondary",
    icon: IoHomeOutline,
  },
];

export const locations = [
  {
    label: "In the heart of an international site",
  },
  {
    label: "Less than 30 minutes away from an international site",
  },
  {
    label: "Less than 30 minutes away from a national site",
  },
  {
    label: "Less than 30 minutes away from a local site",
  },
  {
    label: "More than 30 minutes away from all tourist sites",
  },
];

export const sizes = [
  {
    label: "Bedrooms",
    icon: MdOutlineBedroomParent,
    count: 1,
  },
  {
    label: "Bathrooms",
    icon: MdOutlineBathroom,
    count: 1,
  },
];

export const peoples = [
  {
    label: "Single beds",
    icon: MdSingleBed,
    count: 0,
  },
  {
    label: "Double beds",
    icon: LiaBedSolid,
    count: 0,
  },
  {
    label: "Big double beds",
    icon: LiaBedSolid,
    count: 0,
  },
  {
    label: "Children's beds",
    icon: MdSingleBed,
    count: 0,
  },
  {
    label: "Baby cribs",
    icon: MdOutlineCrib,
    count: 0,
  },
  {
    label: "Single put-up beds",
    icon: GiPersonInBed,
    count: 0,
  },
  {
    label: "Double put-up beds",
    icon: LiaBedSolid,
    count: 0,
  },
  {
    label: "Children's put-up beds",
    icon: GiPersonInBed,
    count: 0,
  },
  {
    label: "Portable cribs",
    icon: MdOutlineCrib,
    count: 0,
  },
];

export const basics = [
  {
    label: "Wheelchair accessible",
    icon: "/images/icons/accessibility.png",
  },
  {
    label: "Dishwasher",
    icon: "/images/icons/dishwasher.png",
  },
  {
    label: "Dryer",
    icon: "/images/icons/dryer.png",
  },
  {
    label: "Washing machine",
    icon: "/images/icons/washing-machine.png",
  },
  {
    label: "Microwave oven",
    icon: "/images/icons/oven.png",
  },
  {
    label: "Freezer",
    icon: "/images/icons/freezer.png",
  },
  {
    label: "Oven",
    icon: "/images/icons/gas-stove.png",
  },
  {
    label: "Fridge",
    icon: "/images/icons/fridge.png",
  },
  {
    label: "Bathtub",
    icon: "/images/icons/bathtub.png",
  },
  {
    label: "Heating System",
    icon: "/images/icons/heating.png",
  },
  {
    label: "Eletric car plug",
    icon: "/images/icons/energy.png",
  },
  {
    label: "TV",
    icon: "/images/icons/tv.png",
  },
  {
    label: "Computer",
    icon: "/images/icons/computer.png",
  },
  {
    label: "Internet",
    icon: "/images/icons/browser.png",
  },
  {
    label: "Wifi",
    icon: "/images/icons/wifi.png",
  },
  {
    label: "In-home movie theater",
    icon: "/images/icons/movie.png",
  },
  {
    label: "Satellite / cable",
    icon: "/images/icons/satellite.png",
  },
  {
    label: "Phone",
    icon: "/images/icons/landline.png",
  },
  {
    label: "Video game console",
    icon: "/images/icons/game-controller.png",
  },
  {
    label: "Smart TV",
    icon: "/images/icons/smart-tv.png",
  },
];

export const facilities = [
  {
    label: "Private garden",
    icon: "/images/icons/fence.png",
  },
  {
    label: "Pool",
    icon: "/images/icons/pools.png",
  },
  {
    label: "BBQ",
    icon: "/images/icons/bbq.png",
  },
  {
    label: "A/C",
    icon: "/images/icons/a-c.png",
  },
  {
    label: "Elevator",
    icon: "/images/icons/elevator.png",
  },
  {
    label: "Fireplace",
    icon: "/images/icons/fireplace.png",
  },
  {
    label: "Private parking space",
    icon: "/images/icons/parking.png",
  },
  {
    label: "Car",
    icon: "/images/icons/car.png",
  },
  {
    label: "Bicycle",
    icon: "/images/icons/bicycle.png",
  },
  {
    label: "Motorcycle",
    icon: "/images/icons/motorbike.png",
  },
  {
    label: "Doorman inclueded",
    icon: "/images/icons/doorman.png",
  },
  {
    label: "Cleaning person",
    icon: "/images/icons/cleaning-person.png",
  },
  {
    label: "Private tennis court",
    icon: "/images/icons/court.png",
  },
  {
    label: "Ping-pong table",
    icon: "/images/icons/ping-pong-table.png",
  },
  {
    label: "Balcony / terrace",
    icon: "/images/icons/balcony.png",
  },
  {
    label: "Piano",
    icon: "/images/icons/piano.png",
  },
  {
    label: "Jacuzzi",
    icon: "/images/icons/jacuzzi.png",
  },
  {
    label: "Private sauna",
    icon: "/images/icons/sauna.png",
  },
  {
    label: "Private gym",
    icon: "/images/icons/gym.png",
  },
  {
    label: "Pool table",
    icon: "/images/icons/pool-table.png",
  },
  {
    label: "Motor scooter",
    icon: "/images/icons/scooter.png",
  },
  {
    label: "Motorboat",
    icon: "/images/icons/motorboat.png",
  },
  {
    label: "Sailboat",
    icon: "/images/icons/sailboat.png",
  },
  {
    label: "Eletric car",
    icon: "/images/icons/electric-car.png",
  },
  {
    label: "Babysitter included",
    icon: "/images/icons/milk-bottle.png",
  },
];

export const kids = [
  {
    label: "Kids toys",
    icon: "/images/icons/kid-toys.png",
  },
  {
    label: "Kids playground",
    icon: "/images/icons/playground.png",
  },
  {
    label: "Baby gear",
    icon: "/images/icons/baby-gear.png",
  },
  {
    label: "Secured pool",
    icon: "/images/icons/secured-pool.png",
  },
];

export const remotes = [
  {
    label: "High speed connection",
    icon: "/images/icons/high-speed.png",
  },
  {
    label: "Dedicated work space",
    icon: "/images/icons/workplace.png",
  },
];

export const ecos = [
  {
    label: "Renewable energy provider",
    icon: "/images/icons/renewable-energy.png",
  },
  {
    label: "Low consumption machines",
    icon: "/images/icons/energy-consumption.png",
  },
  {
    label: "Selective waste sorting",
    icon: "/images/icons/waste-bin.png",
  },
  {
    label: "Vegetable Garden",
    icon: "/images/icons/vegetables.png",
  },
  {
    label: "Public transport access",
    icon: "/images/icons/public-transport.png",
  },
  {
    label: "Solar panels",
    icon: "/images/icons/solar-panel.png",
  },
];

export const allergies = [
  {
    label: "Cat",
    icon: "/images/icons/cat.png",
  },
  {
    label: "Dog",
    icon: "/images/icons/dog.png",
  },
  {
    label: "Other animals",
    icon: "/images/icons/animals.png",
  },
];

const RegisterBody = () => {
  const [step, setStep] = useState(STEPS.INFO);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      firstName: "",
      lasName: "",
      phone: "",
      basic: [],
      facility: [],
      kid: [],
      remote: [],
      eco: [],
      allergy: [],
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const homeType = watch("homeType");
  const residenceType = watch("residenceType");
  const location = watch("location");
  const size = watch("size");

  const Map = useMemo(
    () =>
      dynamic(() => import("./MapRegister"), {
        ssr: false,
      }),
    [location]
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.ACTIVEMEMBERSHIP) {
      return onNext();
    }
  };

  let bodyContent = (
    <>
      <HeadingRegister label="Information" width="w-1/12" />
      <div className="px-20 flex-col w-full bg-white">
        <div className="flex items-center py-12 w-full text-3xl">
          First you fill information of you
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            register={register}
            errors={errors}
            type="text"
            id="username"
            label="Username*"
            placeholder="Username"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Input
            register={register}
            errors={errors}
            type="password"
            id="password"
            label="Password"
            placeholder="Password"
          />
          <Input
            register={register}
            errors={errors}
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            register={register}
            errors={errors}
            type="text"
            id="firstName"
            label="First Name"
            placeholder="First Name"
          />
          <Input
            register={register}
            errors={errors}
            type="text"
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>Birth Date*</div>
          <Input
            register={register}
            errors={errors}
            type="email"
            id="email"
            label="Email*"
            placeholder="Email"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            register={register}
            errors={errors}
            type="text"
            id="phone"
            label="Phone"
            placeholder="Phone"
          />
          {/* <Input
            type="text"
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
          /> */}
        </div>
        <div className="flex flex-row w-full items-center justify-center pt-10 pb-4    ">
          <input type="checkbox" />
          <div>
            * Creating an account means you're okay with our Terms of Service
            and Privacy Statement.
          </div>
        </div>
        <BtnRegister onClick={handleSubmit(onSubmit)} label="Continue" />
        <div className="bg-[#A7A7A7] w-full h-[0.5px] my-[50px]"></div>
        <div className="w-full flex flex-col items-center  justify-center">
          <div className="text-[20px] font-bold pb-2">Already Member?</div>
          <Link className="text-blue-300 pb-[60px]" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </>
  );

  if (step === STEPS.HOMETYPE) {
    bodyContent = (
      <HomeType
        onClick={(homeType) => setCustomValue("homeType", homeType)}
        selected={homeType}
        handleSubmit={handleSubmit(onSubmit)}
      />
    );
  }

  if (step === STEPS.LOCATION) {
    bodyContent = <Location handleSubmit={handleSubmit(onSubmit)} />;
  }

  if (step === STEPS.HOMESIZE) {
    bodyContent = (
      <HomeSize
        register={register}
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
      />
    );
  }

  if (step === STEPS.PEOPLE) {
    bodyContent = <People handleSubmit={handleSubmit(onSubmit)} />;
  }

  if (step === STEPS.AMENITIES) {
    bodyContent = <Amenities handleSubmit={handleSubmit(onSubmit)} />;
  }

  if (step === STEPS.DESCRIBE) {
    bodyContent = (
      <Describe
        register={register}
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
      />
    );
  }

  if (step === STEPS.TIMEAVAILABLE) {
    bodyContent = <TimeAvailable handleSubmit={handleSubmit(onSubmit)} />;
  }

  if (step === STEPS.IMAGES) {
    bodyContent = <Images />;
  }
  return <div>{bodyContent}</div>;
};

export default RegisterBody;
