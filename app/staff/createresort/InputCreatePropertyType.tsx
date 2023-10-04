"use client";

import React, { Fragment, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InputCreatePropertyType = () => {
  const [quantityPropertyType, setQuantityPropertyType] = useState(1);
  const [propertyTypes, setPropertyTypes] = useState([
    <PropertyType key={0} />,
  ]);

  const handleAddPropertyType = () => {
    setQuantityPropertyType((value) => value + 1);
    setPropertyTypes((prevPropertyTypes) => [
      ...prevPropertyTypes,
      <PropertyType key={quantityPropertyType} />,
    ]);
  };

  return (
    <Fragment>
      <div className="w-[198px] text-gray-700">Property Types</div>
      <div className="flex flex-col">
        {propertyTypes.map((propertyType, index) => (
          <Fragment key={index}>{propertyType}</Fragment>
        ))}
      </div>

      <button onClick={handleAddPropertyType}>
        <AiOutlinePlusCircle size={30} />
      </button>
    </Fragment>
  );
};

const PropertyType = () => {
  return (
    <Fragment>
      <div className="flex flex-row">
        <select className="text-gray-800 mr-[20px] px-4 py-3 bg-[#F8F8F8] border-b-2 border-black border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent">
          <option value="">-</option>
          <option value="">Wifi Available</option>
          <option value="">None</option>
        </select>
      </div>
    </Fragment>
  );
};

export default InputCreatePropertyType;
