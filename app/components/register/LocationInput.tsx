"use client";

import { Checkbox } from "@mui/material";
import React from "react";

interface LocationInputProps {
  onClick: (value: string) => void;
  label: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ onClick, label }) => {
  return (
    <div className="flex items-center">
      <Checkbox onClick={() => onClick(label)}></Checkbox>
      {label}
    </div>
  );
};

export default LocationInput;
