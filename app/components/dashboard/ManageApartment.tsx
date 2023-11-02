"use client";
import Image from "next/image";
import React, { useState, useRef, ChangeEvent } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import EditPublicTime from "../managementApartment/EditPublicTime";
import { BiBlock } from "react-icons/bi";
import { Dropdown } from "flowbite-react";

export default function ManageApartment() {
  const imagesData = [
    {
      src: "/images/resort1.jpg",
      alt: "destination 1",
    },
    {
      src: "/images/resortdetail1.jpg",
      alt: "destination 2",
    },
    {
      src: "/images/resortdetail2.jpg",
      alt: "destination 3",
    },
    {
      src: "/images/resortdetail3.jpg",
      alt: "destination 4",
    },
    {
      src: "/images/resortdetail4.jpg",
      alt: "destination 5",
    },
  ];

  const [images, setImages] = useState(imagesData);
  const imageInputRef = useRef(null);

  const handleDeleteImage = (index: any) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);

      const updatedImages = [...images];
      updatedImages.push({ src: imageURL, alt: "New Image" });
      setImages(updatedImages);
    }
  };

  return (
    <div>
      <div className="py-3">
        <div className=" flex gap-3">
          <div className="image-large-container">
            {images.length > 0 && (
              <div className="image-wrapper flex flex-row">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  height={800}
                  width={350}
                  className="w-[700px] h-[318px] rounded-xl relative"
                />
                <button
                  onClick={() => handleDeleteImage(0)}
                  className="delete-button absolute py-3 px-3"
                >
                  <AiOutlineCloseCircle size={20} />
                </button>
              </div>
            )}
          </div>
          <div className="border border-gray-500 px-2 rounded-md ">
            <div className="py-2">
              <div className="flex flex-row  gap-3 mb-3  items-center">
                <div className="underline text-[20px] w-[300px]">
                  Apartment view bien Thuc
                </div>
                <div>
                  <FiEdit />
                </div>
              </div>
              <div className="flex flex-row items-center w-full justify-between py-4">
                <div>
                  Status: <span className="text-common">Active</span>
                </div>
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="z-50">
                      <FiEdit className="cursor-pointer hover:color-red-600" />
                    </span>
                  )}
                >
                  <Dropdown.Item>In-active</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown>
              </div>
              <div className="flex flex-row items-center w-full justify-between py-4">
                <div>
                  Resort:{" "}
                  <span className="text-common">Phu Quoc Resort VIP</span>
                </div>
                <BiBlock />
              </div>
              <div className="flex flex-row items-center w-full justify-between py-4">
                <div>
                  Apartment ID: <span className="text-common">887</span>
                </div>
                <BiBlock />
              </div>
              <div className="flex flex-row items-center justify-center w-full">
                <EditPublicTime />
              </div>
              <div className="flex flex-row items-center justify-center w-full mt-5">
                <button className="bg-common text-white px-5 py-2 rounded-md hover:bg-blue-600">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="image-small-container flex flex-wrap gap-3 mt-3">
          {images.slice(1, images.length).map((image, index) => (
            <div key={index} className="image-container">
              <div className="image-wrapper flex flex-row">
                <div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={200}
                    width={100}
                    className="w-[195px] h-[150px] rounded-xl relative"
                  />
                </div>
                <div className="absolute flex flex-row items-center justify-end">
                  <button
                    onClick={() => handleDeleteImage(index + 1)}
                    className="delete-button py-3 px-3 left-0"
                  >
                    <AiOutlineCloseCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-10">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={imageInputRef}
          />
        </div>
        <div>
          <div>
            <div className="pb-3">Descriptions</div>
            <textarea
              value="The house is located in the outermost corner on the 10th floor. The entire house is quite spacious, with three bedrooms, two bathrooms, a living room and a kitchen. Right from the main door, there is a wide platform to place shoe cabinets, hangers for coats, umbrellas, and hats for everyone to go out. Going in a little further, there is a spacious living room. There, the parents placed a warm yellow sofa. There is always a lovely vase of fresh flowers on the table. Next to the living room is a small balcony facing the lake."
              className="w-full rounded-md"
              name=""
              id=""
              cols={20}
              rows={10}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-end py-5">
        <button className="bg-common text-white rounded-md px-5 py-2 hover:bg-blue-600">
          save
        </button>
      </div>
    </div>
  );
}
