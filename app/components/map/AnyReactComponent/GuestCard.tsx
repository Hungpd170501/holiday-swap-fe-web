"use client"
import React from "react";
import "./GuestCardAnimate.css";


import { useState, useEffect } from "react";
import Card from "@mui/material/Card/Card";
import CardContent from '@mui/material/CardContent';
import NcInputNumber from "./NcInputNumber";
import { GuestsObject } from "../type";

interface GuestCardProps {
  setGuestNumber: (value: number) => void;
  setRoomsNumber: (value: number) => void;
  top?: string;
  right?: string;
  position?: string;
}

const GuestCard: React.FC<GuestCardProps> = ({ setGuestNumber, setRoomsNumber, top, right, position}) => {
  const [roomsInputValue, setRoomsInputValue] = useState(1);
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);

  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    let newValue = {
      guestAdults: guestAdultsInputValue,
      guestChildren: guestChildrenInputValue,
      guestInfants: guestInfantsInputValue,
      rooms: roomsInputValue
    };
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
      newValue.guestAdults = value;
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
      newValue.guestChildren = value;
    }
    if (type === "guestInfants") {
      setGuestInfantsInputValue(value);
      newValue.guestInfants = value;
    }
    if (type === "rooms") {
      setRoomsInputValue(value);
      newValue.rooms = value;
    }
    setGuestNumber(guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue);
    setRoomsNumber(roomsInputValue);
  };

  useEffect(() => {
    setRoomsNumber(roomsInputValue);
  }, [roomsInputValue, setRoomsNumber]);

  useEffect(() => {
    setGuestNumber(guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue);
  }, [guestChildrenInputValue, guestAdultsInputValue, guestInfantsInputValue, setGuestNumber]);

  return (
    <Card className={`AnimateRight rounded-2xl md:mt-1`}>
      <CardContent>
        <NcInputNumber
          className="w-full text-sm md:px-1.5"
          defaultValue={roomsInputValue}
          onChange={(value) => handleChangeData(value, "rooms")}
          max={999}
          min={1}
          label="Rooms"
        />
        <NcInputNumber
          className="w-full mt-2 text-sm md:px-1.5"
          defaultValue={guestAdultsInputValue}
          onChange={(value) => handleChangeData(value, "guestAdults")}
          max={999}
          min={1}
          label="Adults"
          desc="Ages 13 or above"
        />
        <NcInputNumber
          className="w-full mt-1 text-sm md:px-1.5"
          defaultValue={guestChildrenInputValue}
          onChange={(value) => handleChangeData(value, "guestChildren")}
          max={99}
          label="Children"
          desc="Ages 2–12"
        />
        <NcInputNumber
          className="w-full mt-1 text-sm md:px-1.5"
          defaultValue={guestInfantsInputValue}
          onChange={(value) => handleChangeData(value, "guestInfants")}
          max={99}
          label="Infants"
          desc="Ages 0–2"
        />
      </CardContent>
    </Card>
  );
}

export default GuestCard;