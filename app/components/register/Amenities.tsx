"use client";

import React, { Fragment, useState } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import {
  allergies,
  basics,
  ecos,
  facilities,
  kids,
  remotes,
} from "./RegisterBody";
import AminitiesInput from "./AminitiesInput";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ButtonRegister from "./BtnRegister";
import Image from "next/image";

interface AmenitiesProps {
  handleSubmit: () => void;
}

const Amenities: React.FC<AmenitiesProps> = ({ handleSubmit }) => {
  const [seeMoreBasics, setSeeMoreBasics] = useState(false);
  const [seeMoreFacilities, setSeeMoreFacilities] = useState(false);
  const [haveAnimal, setHaveAnimal] = useState("No");
  const [basic, setBasic] = useState<any[]>([]);
  const [kid, setKid] = useState<any[]>([]);
  const [facility, setFacility] = useState<any[]>([]);
  const [remote, setRemote] = useState<any[]>([]);
  const [eco, setEco] = useState<any[]>([]);
  const [allergy, setAllergy] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSeeMoreBasics = () => {
    setSeeMoreBasics(!seeMoreBasics);
  };

  const handleSeeMoreFacilities = () => {
    setSeeMoreFacilities(!seeMoreFacilities);
  };

  const hanleHaveAnimal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHaveAnimal((event.target as HTMLInputElement).value);
  };

  const toggleAmenity = (amenityArray: any, amenity: any) => {
    const updatedArray = [...amenityArray];
    const index = updatedArray.indexOf(amenity);

    if (index === -1) {
      // Add the amenity if it doesn't exist in the array
      updatedArray.push(amenity);
    } else {
      // Remove the amenity if it exists in the array
      updatedArray.splice(index, 1);
    }

    return updatedArray;
  };
  return (
    <Fragment>
      <HeadingRegister
        label="Tell the exchangers what amenities they will find in your home"
        width="w-6/12"
        className="px-0 md:px-48"
      />
      <Container className="py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          {/* Your basics */}
          <div className="py-5">
            <div className="text-2xl font-bold py-3">Your basics</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {seeMoreBasics
                ? basics.map((item, index) => (
                    <AminitiesInput
                      key={index}
                      label={item.label}
                      icon={item.icon}
                      selected={basic.includes(item.label)}
                      onClick={(value) => {
                        const updatedBasic = toggleAmenity(basic, value); // Use your toggleAmenity function
                        setBasic(updatedBasic);
                      }}
                      id="basic"
                    />
                  ))
                : basics.slice(0, 9).map((item, index) => (
                    <AminitiesInput
                      key={index}
                      label={item.label}
                      icon={item.icon}
                      selected={basic.includes(item.label)}
                      onClick={(value) => {
                        const updatedBasic = toggleAmenity(basic, value); // Use your toggleAmenity function
                        setBasic(updatedBasic);
                      }}
                      id="basic"
                    />
                  ))}
            </div>
            <div
              onClick={handleSeeMoreBasics}
              className="underline text-common text-lg font-bold cursor-pointer hover:text-sky-500 flex justify-end"
            >
              {seeMoreBasics ? "See less" : "See more"}
            </div>
          </div>

          {/* Your Unique Facilities */}
          <div className="py-5">
            <div className="text-2xl font-bold py-3">
              Your Unique Facilities
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {seeMoreFacilities
                ? facilities.map((item, index) => (
                    <AminitiesInput
                      key={index}
                      label={item.label}
                      icon={item.icon}
                      selected={facility.includes(item.label)}
                      onClick={(value) => {
                        const updatedFacility = toggleAmenity(facility, value); // Use your toggleAmenity function
                        setFacility(updatedFacility);
                      }}
                      id="facility"
                    />
                  ))
                : facilities.slice(0, 9).map((item, index) => (
                    <AminitiesInput
                      key={index}
                      label={item.label}
                      icon={item.icon}
                      selected={facility.includes(item.label)}
                      onClick={(value) => {
                        const updatedFacility = toggleAmenity(facility, value); // Use your toggleAmenity function
                        setFacility(updatedFacility);
                      }}
                      id="facility"
                    />
                  ))}
            </div>

            <div
              onClick={handleSeeMoreFacilities}
              className="underline text-common text-lg font-bold cursor-pointer hover:text-sky-500 flex justify-end"
            >
              {seeMoreFacilities ? "See less" : "See more"}
            </div>
          </div>

          {/* Kids Friendly */}
          <div className="py-5">
            <div className="text-2xl font-bold py-3">Kids Friendly</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kids.map((item, index) => (
                <AminitiesInput
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  selected={kid.includes(item.label)}
                  onClick={(value) => {
                    const updatedKid = toggleAmenity(kid, value); // Use your toggleAmenity function
                    setKid(updatedKid);
                  }}
                  id="kid"
                />
              ))}
            </div>
          </div>

          {/* Remote Friendly */}
          <div className="py-5">
            <div className="text-2xl font-bold py-3">Remote Friendly</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {remotes.map((item, index) => (
                <AminitiesInput
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  selected={remote.includes(item.label)}
                  onClick={(value) => {
                    const updatedRemote = toggleAmenity(remote, value); // Use your toggleAmenity function
                    setRemote(updatedRemote);
                  }}
                  id="remote"
                />
              ))}
            </div>
          </div>

          {/* Eco-Friendly Amenities */}
          <div className="py-5">
            <div className="text-2xl font-bold py-3">
              Eco-Friendly Amenities
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ecos.map((item, index) => (
                <AminitiesInput
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  selected={eco.includes(item.label)}
                  onClick={(value) => {
                    const updatedEco = toggleAmenity(eco, value); // Use your toggleAmenity function
                    setEco(updatedEco);
                  }}
                  id="eco"
                />
              ))}
            </div>
          </div>

          <div className="py-5">
            <div className="text-2xl font-bold py-3">Allergies *</div>
            <div className="py-4">
              <div className="text-lg text-black">
                I have pets living in my home
              </div>
              <div className="text-gray-400 text-sm">
                Some animals may cause allergy symptoms
              </div>
            </div>

            <div className="py-3">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={haveAnimal}
                  onChange={hanleHaveAnimal}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>

            {haveAnimal === "Yes" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allergies.map((item, index) => (
                  <AminitiesInput
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    selected={allergy.includes(item.label)}
                    onClick={(value) => {
                      const updatedAllergy = toggleAmenity(allergy, value); // Use your toggleAmenity function
                      setAllergy(updatedAllergy);
                    }}
                    id="allergy"
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-center">
            <ButtonRegister label="Continue" onClick={handleSubmit} />
          </div>
        </div>

        <div className="h-full">
          <Image
            src="/images/animities.png"
            alt="Home"
            width={600}
            height={720}
            className="hidden md:block"
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default Amenities;
