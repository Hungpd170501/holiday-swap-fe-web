"use client";

import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
interface LocationInputProps {
  label: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ label }) => {
  return <FormControlLabel value={label} control={<Radio />} label={label} />;
};

export default LocationInput;
