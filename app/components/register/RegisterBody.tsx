"use client";

import React, { useState, useMemo } from "react";
import Input from "../input/Input";
import Link from "next/link";
import BtnRegister from "./BtnRegister";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Container from "../Container";
import { LuWarehouse } from "react-icons/lu";
import { MdApartment } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import HomeType from "./HomeType";
import Image from "next/image";
import ButtonRegister from "./BtnRegister";
import dynamic from "next/dynamic";
import MapRegister from "./MapRegister";

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
      <div className="bg-[#F5F5F7] flex items-center justify-center ">
        <div className="text-5xl  pt-[250px] pb-[70px]">Information</div>
      </div>
      <div className="border-common w-1/12 border-2"></div>
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
      <>
        <div className="bg-[#F5F5F7] flex items-center justify-center">
          <div className="text-5xl  pt-[250px] pb-[70px]">
            What's your home like?
          </div>
        </div>
        <div className="border-common w-2/12 border-2"></div>
        <Container className="py-8">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="font-normal">
                Let potential exchange partners learn more about you, motivating
                them to swap homes with you!
              </div>

              <div className="font-normal">
                It takes two minutes, and you'll be able to decide to welcome
                other members to your home.
              </div>

              <div className="flex flex-col py-4">
                <div className="py-4">
                  <p>Home type</p>
                  <div className="flex gap-5">
                    {homeTypes.map((home, index) => (
                      <HomeType
                        onClick={(homeType) =>
                          setCustomValue("homeType", homeType)
                        }
                        selected={homeType === home.label}
                        key={index}
                        icon={home.icon}
                        label={home.label}
                      />
                    ))}
                  </div>
                </div>

                <div className="py-4">
                  <p>Residence type</p>
                  <div className="flex gap-5">
                    {residenceTypes.map((item, index) => (
                      <HomeType
                        onClick={(residence) =>
                          setCustomValue("residenceType", residence)
                        }
                        selected={residenceType === item.label}
                        key={index}
                        icon={item.icon}
                        label={item.label}
                      />
                    ))}
                  </div>
                </div>

                <ButtonRegister
                  onClick={handleSubmit(onSubmit)}
                  label="Continue"
                />
              </div>
            </div>

            <div>
              <Image
                src="/images/home.png"
                alt="Home"
                width={600}
                height={720}
              />
            </div>
          </div>
        </Container>
      </>
    );
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <>
        <div className="bg-[#F5F5F7] flex items-center justify-center">
          <div className="text-5xl  pt-[250px] pb-[70px]">
            Tell us more about your home
          </div>
        </div>
        <div className="border-common w-3/12 border-2"></div>
        <Container className="py-5 grid grid-cols-2">
          <div>
            <MapRegister />

            <div>
              <p>Location</p>
            </div>
          </div>
        </Container>
      </>
    );
  }

  return <div>{bodyContent}</div>;
};

export default RegisterBody;
