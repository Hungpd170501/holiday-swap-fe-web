"use client";

import React, { Fragment, useEffect, useState } from "react";
import CardListResort from "../components/listResort/CardListResort";
import Pagination from "../components/Pagination";
import getListResort from "../actions/getListResort";
import axios from "axios";

const data = {
  content: [
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 1,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 3,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 1,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 2,
                startTime: 1704042000000,
                endTime: 1704387600000,
                pricePerNight: 10,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 3,
                startTime: 1735664400000,
                endTime: 1736010000000,
                pricePerNight: 15,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 4,
                startTime: 1767200400000,
                endTime: 1767546000000,
                pricePerNight: 20,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 5,
                startTime: 1798736400000,
                endTime: 1799082000000,
                pricePerNight: 3,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 6,
                startTime: 1704646800000,
                endTime: 1705165200000,
                pricePerNight: 8,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 7,
                startTime: 1705251600000,
                endTime: 1705942800000,
                pricePerNight: 9,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
              {
                id: 8,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 3,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 1,
        propertyName: "Deluxe King Room",
        propertyDescription: "1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 0,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 1,
        numberBathRoom: 1,
        roomSize: 37,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 5,
        propertyType: {
          id: 12,
          propertyTypeName: "King",
          propertyTypeDescription: "a room with a king-sized bed.",
          deleted: false,
        },
        propertyView: {
          id: 1,
          propertyViewName: "Ocean view",
          propertyViewDescription: "A view of the ocean from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 2,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cae059ff-5f17-454d-adaf-a45943ed2f8d_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 3,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7bb3924e-0bc7-4e1b-84ab-57b3bb736323_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 4,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4c58175e-18b5-419c-80ac-c40d06c3eed0_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 5,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/f39b50c8-849b-4615-ac1f-16b00ff400c8_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 6,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3a6109a0-656b-4d23-8634-a71a99f27fc8_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 7,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfe68cc6-cca4-4ae4-bc0e-44f74d6609f9_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 8,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e93a1f0d-428c-4613-8c04-883edfa397d7_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 10,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1b8cd8b6-3880-4164-888d-8e0e006f5f9f_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 1,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8fc1eecf-9862-4d47-ba21-6e9755582206_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 9,
            propertyId: 1,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1d944ebc-fe21-41f2-9f68-dbdfb0fc1a39_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 2,
          startTime: 1704042000000,
          endTime: 1704387600000,
          pricePerNight: 10,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 3,
          startTime: 1735664400000,
          endTime: 1736010000000,
          pricePerNight: 15,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 4,
          startTime: 1767200400000,
          endTime: 1767546000000,
          pricePerNight: 20,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 5,
          startTime: 1798736400000,
          endTime: 1799082000000,
          pricePerNight: 3,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 6,
          startTime: 1704646800000,
          endTime: 1705165200000,
          pricePerNight: 8,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 7,
          startTime: 1705251600000,
          endTime: 1705942800000,
          pricePerNight: 9,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
        {
          id: 8,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 3,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 2,
          userId: 5,
          roomId: "001",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 4,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 2,
            userId: 5,
            roomId: "001",
            availableTimes: [
              {
                id: 10,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 4,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 2,
        propertyName: "Deluxe Villa",
        propertyDescription: "4 single beds(1m wide) and 1 king bed(2m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 0,
        numberSingleBeds: 4,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 3,
        numberBathRoom: 1,
        roomSize: 212,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 6,
        propertyType: {
          id: 25,
          propertyTypeName: "Villa",
          propertyTypeDescription:
            "most villas can be found at resorts. These kinds of rooms are actually stand-alone houses that have extra space and privacy. Villas typically come equipped with multiple bedrooms, a living room, a swimming pool, and a balcony.",
          deleted: false,
        },
        propertyView: {
          id: 2,
          propertyViewName: "Beachfront view\t",
          propertyViewDescription: "A view of the beach from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 11,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/97419995-3158-4c96-9baa-53b3665b4f6d_0226q12000aj9k8de1380_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 12,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/73345037-223d-4cf6-a612-e07c93b370c6_02245120009kl82rcA53F_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 13,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa20e9b5-54a0-43b2-84e9-b2fdb75303b8_200213000000v467eBDB3_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 14,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/70ce864d-e738-4882-960b-2d9113b508a8_200913000000uzhto5F65_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 15,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/c94f4bf5-1792-471b-a340-756ea09deffc_220713000000v0aw75AD8_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 16,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4d4a5e7c-9b57-4bfe-aeb9-b38520c9a7cf_0200t120008dpltjhE497_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 17,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b2629dce-bb84-4d33-8f31-7469a39104fc_0202l120008dplol597E5_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 18,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7f3a1252-15a3-4399-9795-fcbc157f0026_0203b120008ru8wjmE8A4_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 19,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/bef7f144-bafe-418f-afeb-3a16185ecd72_0205w120008ru8tc55B16_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 20,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/4e191570-8a50-4130-8d43-d2a333c6277e_0205y120008ru8wjhFB2E_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 21,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/16e8d635-d5b5-4e14-a558-6316b67677bb_0220l120009kk9gkz1818_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 22,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/99b025ec-7f35-4454-8c60-52ddce8821f4_0225u120009kmd2d839D8_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 23,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfaa6fd4-947a-443e-a678-6dcfecec6d52_02008120008ru8u9o64FA_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 24,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/445c19d7-8781-413c-83ec-2fab31665c8c_02053120008ru8tuxC131_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 26,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/0ccf1afa-1897-447e-87a7-fdc9b7ba2bd2_02240120009kmd488192E_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
          {
            id: 25,
            propertyId: 2,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0ebb67d-8557-4315-b2d3-fcad5c71b410_02058120008ru8jc0BA47_W_1280_853_R5_Q70.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 10,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 4,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 3,
          userId: 5,
          roomId: "002",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 5,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 3,
            userId: 5,
            roomId: "002",
            availableTimes: [
              {
                id: 9,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 5,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 3,
        propertyName: "Grande Suite",
        propertyDescription:
          "2 single beds(1m wide) and 1 king bed(2m wide) and 1 queen bed(1.6m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 1,
        numberSingleBeds: 2,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 3,
        numberBathRoom: 1,
        roomSize: 116,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 7,
        propertyType: {
          id: 21,
          propertyTypeName: "Suite",
          propertyTypeDescription:
            "suites come in a few different sizes. A basic suite or executive suite comes with a separate living space connected to one or more bedrooms. This set up is sometimes also called a master suite. A mini-suite or junior suite refers to a single room with a bed and sitting area. Some suites also come with kitchenettes. The presidential suite, as the name would suggest, is usually the most expensive room provided by a hotel. It will have one or more bedrooms, a living space, and impressive amenities, decoration, and tailor-made services. ",
          deleted: false,
        },
        propertyView: {
          id: 2,
          propertyViewName: "Beachfront view\t",
          propertyViewDescription: "A view of the beach from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 27,
            propertyId: 3,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/796fcf02-733b-4ef2-bff2-649d95e2eb56_200j13000000uwludCC47_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 28,
            propertyId: 3,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dfaa3052-0e0c-45ae-b205-75d81e0d5742_0205e120009atkpb324FF_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 29,
            propertyId: 3,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/97f55cc7-f763-4ebc-9257-e509016e0557_220a12000000rptueE423_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 30,
            propertyId: 3,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/be64e2ae-c807-401c-abd3-92b96d8e42f4_220d13000000ui4zs052B_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 31,
            propertyId: 3,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/bb391c22-b8bf-45fb-b75d-ac0b44b9ad3e_0221b120009kl7zh7D3EE_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 32,
            propertyId: 3,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/55ca5b6b-b418-4011-8dac-983a6e750126_0221o120009kl82y2482D_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 97,
            propertyId: 3,
            link: "",
            deleted: false,
          },
          {
            id: 98,
            propertyId: 3,
            link: "",
            deleted: false,
          },
          {
            id: 99,
            propertyId: 3,
            link: "",
            deleted: false,
          },
          {
            id: 100,
            propertyId: 3,
            link: "",
            deleted: false,
          },
          {
            id: 101,
            propertyId: 3,
            link: "",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 9,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 5,
          deleted: false,
        },
      ],
    },
    {
      coOwner: {
        id: {
          propertyId: 4,
          userId: 5,
          roomId: "002",
        },
        endTime: null,
        startTime: null,
        type: "DEEDED",
        status: "ACCEPTED",
        contractImages: [],
        timeFrames: [
          {
            id: 6,
            startTime: null,
            endTime: null,
            status: "ACCEPTED",
            propertyId: 4,
            userId: 5,
            roomId: "002",
            availableTimes: [
              {
                id: 11,
                startTime: 1830470400000,
                endTime: 1830816000000,
                pricePerNight: 12,
                status: "OPEN",
                timeFrameId: 6,
                deleted: false,
              },
            ],
            deleted: false,
          },
        ],
        deleted: false,
      },
      min: 0,
      max: 0,
      startDate: null,
      endDate: null,
      property: {
        id: 4,
        propertyName: "Executive Three Bedroom Suite",
        propertyDescription:
          "1 king bed(2m wide) and 1 queen bed(1.6m wide) and 2 single beds(1.1m wide)",
        numberKingBeds: 1,
        numberQueenBeds: 1,
        numberSingleBeds: 2,
        numberDoubleBeds: 0,
        numberTwinBeds: 0,
        numberFullBeds: 0,
        numberSofaBeds: 0,
        numberMurphyBeds: 0,
        numberBedsRoom: 3,
        numberBathRoom: 1,
        roomSize: 116,
        isDeleted: false,
        status: "ACTIVE",
        resortId: 8,
        propertyType: {
          id: 21,
          propertyTypeName: "Suite",
          propertyTypeDescription:
            "suites come in a few different sizes. A basic suite or executive suite comes with a separate living space connected to one or more bedrooms. This set up is sometimes also called a master suite. A mini-suite or junior suite refers to a single room with a bed and sitting area. Some suites also come with kitchenettes. The presidential suite, as the name would suggest, is usually the most expensive room provided by a hotel. It will have one or more bedrooms, a living space, and impressive amenities, decoration, and tailor-made services. ",
          deleted: false,
        },
        propertyView: {
          id: 2,
          propertyViewName: "Beachfront view\t",
          propertyViewDescription: "A view of the beach from the property.",
          deleted: false,
        },
        inRoomAmenityType: [
          {
            id: 1,
            inRoomAmenityTypeName: "Toiletries",
            inRoomAmenityTypeDescription: "Toiletries",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 1,
                inRoomAmenityName: "Toothbrush",
                inRoomAmenityDescription: "Toothbrush",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/87fe984b-0c2c-401e-a930-069400528a89_Toothbrush.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 2,
                inRoomAmenityName: "Toothpaste",
                inRoomAmenityDescription: "Toothpaste",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/072a4447-a188-4245-9dc2-4d6ba40914d7_Toothpaste.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 3,
                inRoomAmenityName: "Body Wash",
                inRoomAmenityDescription: "Body Wash",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/50771df3-c585-4838-ac26-1ae2519d6e5f_Body%20Wash.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
              {
                id: 4,
                inRoomAmenityName: "Shampoo",
                inRoomAmenityDescription: "Shampoo",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5ef9e680-0e1e-4dd2-b104-407a8c33ece4_Shampoo.png",
                isDeleted: false,
                inRoomAmenityTypeId: 1,
              },
            ],
          },
          {
            id: 2,
            inRoomAmenityTypeName: "Room Layout and Furnishings",
            inRoomAmenityTypeDescription: "Room Layout and Furnishings",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 5,
                inRoomAmenityName: "Sofa",
                inRoomAmenityDescription: "Sofa",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/29233fd7-abdc-4f67-854c-97cb51b1fcf0_Sofa.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 6,
                inRoomAmenityName: "Desk",
                inRoomAmenityDescription: "Desk",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d4eba5ef-be28-471d-ba95-e1e535a4c901_Desk.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 7,
                inRoomAmenityName: "Private Entrance",
                inRoomAmenityDescription: "Private Entrance",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/d67f25e2-1ee8-40dc-aad7-373bd30b7ba3_Private%20Entrance.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
              {
                id: 8,
                inRoomAmenityName: "Balcony",
                inRoomAmenityDescription: "Balcony",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e5a0ccd2-97e0-4b24-98c1-ed8cb8682c6d_Balcony.png",
                isDeleted: false,
                inRoomAmenityTypeId: 2,
              },
            ],
          },
          {
            id: 3,
            inRoomAmenityTypeName: "Internet and Communication Devices",
            inRoomAmenityTypeDescription: "Internet and Communication Devices",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 9,
                inRoomAmenityName: "Wi-Fi",
                inRoomAmenityDescription: "Wi-Fi",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/3d1cb577-cb61-4e3b-b709-bf3881235d10_Wi-Fi.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 10,
                inRoomAmenityName: "Telephone",
                inRoomAmenityDescription: "Telephone",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e0d5547d-5218-4b42-b581-55f3d6844147_Telephone.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 11,
                inRoomAmenityName: "International Long-Distance Calls",
                inRoomAmenityDescription: "International Long-Distance Calls",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cf0acf9e-1f19-40b7-a55b-89543aaee6b5_International%20Long-Distance%20Calls.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
              {
                id: 12,
                inRoomAmenityName: "Microwave Oven",
                inRoomAmenityDescription: "Microwave Oven",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/000163cd-fda6-4b31-b159-effd1378deb0_Microwave%20Oven.png",
                isDeleted: false,
                inRoomAmenityTypeId: 3,
              },
            ],
          },
          {
            id: 4,
            inRoomAmenityTypeName: "Kitchen amenities",
            inRoomAmenityTypeDescription: "Kitchen amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 13,
                inRoomAmenityName: "Refrigerator",
                inRoomAmenityDescription: "Refrigerator",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/dc4fe2cf-dc8a-47f5-b214-762e91968912_Refrigerator.png",
                isDeleted: false,
                inRoomAmenityTypeId: 4,
              },
            ],
          },
          {
            id: 5,
            inRoomAmenityTypeName: "Food & Drinks",
            inRoomAmenityTypeDescription: "Food & Drinks",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 14,
                inRoomAmenityName: "Coffee/Tea Pot",
                inRoomAmenityDescription: "Coffee/Tea Pot",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/ae1a160e-65ed-4182-b613-6a3319d775ee_Coffee.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 15,
                inRoomAmenityName: "Bottled Water",
                inRoomAmenityDescription: "Bottled Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c03ff90-30df-4430-9dd7-066de395206a_Bottled%20Water.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
              {
                id: 16,
                inRoomAmenityName: "Minibar",
                inRoomAmenityDescription: "Minibar",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b69c544-43e9-4fe0-ba13-a3c33a55b1bd_Minibar.png",
                isDeleted: false,
                inRoomAmenityTypeId: 5,
              },
            ],
          },
          {
            id: 6,
            inRoomAmenityTypeName: "Bathroom facilities",
            inRoomAmenityTypeDescription: "Bathroom facilities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 17,
                inRoomAmenityName: "Private Bathroom",
                inRoomAmenityDescription: "Private Bathroom",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/95b6e005-fa3a-4955-9269-7dae0428dc61_Private%20Bathroom.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 18,
                inRoomAmenityName: "Private Toilet",
                inRoomAmenityDescription: "Private Toilet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/e2342715-5fe9-408a-b936-31aada609e6c_Private%20Toilet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 19,
                inRoomAmenityName: "Hair Dryer",
                inRoomAmenityDescription: "Hair Dryer",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/67513b2d-41aa-4f94-ba87-5d3ca4322d6a_Hair%20Dryer.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 20,
                inRoomAmenityName: "Bathroom Makeup Mirror",
                inRoomAmenityDescription: "Bathroom Makeup Mirror",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/18b707d2-f7a4-4218-b9b3-47aaf0481cc0_Bathroom%20Makeup%20Mirror.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 21,
                inRoomAmenityName: "Bathrobe",
                inRoomAmenityDescription: "Bathrobe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1bbfdd1f-3c12-4c5a-ac25-74006cb53bdb_Bathrobe.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 22,
                inRoomAmenityName: "24-Hour Hot Water",
                inRoomAmenityDescription: "24-Hour Hot Water",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
              {
                id: 23,
                inRoomAmenityName: "Slippers",
                inRoomAmenityDescription: "Slippers",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/cefbc913-684c-4fcd-8aca-e77f94d4540d_Slippers.png",
                isDeleted: false,
                inRoomAmenityTypeId: 6,
              },
            ],
          },
          {
            id: 7,
            inRoomAmenityTypeName: "Room Amenities",
            inRoomAmenityTypeDescription: "Room Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 24,
                inRoomAmenityName: "Air Conditioning",
                inRoomAmenityDescription: "Air Conditioning",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/1161f0ae-24f6-4d1e-bc0a-9a8ae1a34b6f_Air%20Conditioning.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 25,
                inRoomAmenityName: "Automatic Curtain",
                inRoomAmenityDescription: "Automatic Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/5a08dc0e-6521-46c6-86ed-5e8c1d20b44b_Automatic%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 26,
                inRoomAmenityName: "Shade Curtain",
                inRoomAmenityDescription: "Shade Curtain",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/736f2dcb-f30e-4cb6-95be-14c6dc136c55_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 27,
                inRoomAmenityName: "Bedding: Duvet",
                inRoomAmenityDescription: "Bedding: Duvet",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/9cf0ce75-1c3c-4388-828d-8602e863adb8_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
              {
                id: 28,
                inRoomAmenityName: "Bedding: Blanket Or Quilt",
                inRoomAmenityDescription: "Bedding: Blanket Or Quilt",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/aa59e005-15ee-4cea-bffb-b181b0e4b48d_BeddingDuvet.png",
                isDeleted: false,
                inRoomAmenityTypeId: 7,
              },
            ],
          },
          {
            id: 8,
            inRoomAmenityTypeName: "Media/Technology",
            inRoomAmenityTypeDescription: "Media/Technology",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 29,
                inRoomAmenityName: "TV",
                inRoomAmenityDescription: "TV",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/980d3331-88a4-45b7-a02a-083b4d81cf53_TV.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 30,
                inRoomAmenityName: "Cable Channels",
                inRoomAmenityDescription: "Cable Channels",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8b145074-bbce-4baa-ab43-ff44ff286a95_Cable%20Channels.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 31,
                inRoomAmenityName: "Audio Equipment",
                inRoomAmenityDescription: "Audio Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/230d5b99-1231-445e-b0a7-27b0545a6cae_Audio%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
              {
                id: 32,
                inRoomAmenityName: "Butler Service",
                inRoomAmenityDescription: "Butler Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8cda9978-e7ad-4bb8-933b-39b441b12d08_Butler%20Service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 8,
              },
            ],
          },
          {
            id: 9,
            inRoomAmenityTypeName: "Amenities",
            inRoomAmenityTypeDescription: "Amenities",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 33,
                inRoomAmenityName: "In-Room Safe",
                inRoomAmenityDescription: "In-Room Safe",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/b69c4cad-9600-4a3a-91c5-3caf1133e5f7_Shade%20Curtain.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 34,
                inRoomAmenityName: "Sewing Kit",
                inRoomAmenityDescription: "Sewing Kit",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/db61d350-efe3-4778-8a8a-fad3ef5563dd_Sewing%20Kit.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 35,
                inRoomAmenityName: "Turn Down Service",
                inRoomAmenityDescription: "Turn Down Service",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/a0754cd3-67ec-4d86-a476-28863380cbd6_Turndown%20service.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 36,
                inRoomAmenityName: "220V Socket",
                inRoomAmenityDescription: "220V Socket",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/59a7e044-f67f-4d25-853c-e4bb298f9b39_220V%20Socket.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
              {
                id: 37,
                inRoomAmenityName: "Umbrella",
                inRoomAmenityDescription: "Umbrella",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/470a9a31-e112-4fa7-bc68-c401d659ad7a_Umbrella.png",
                isDeleted: false,
                inRoomAmenityTypeId: 9,
              },
            ],
          },
          {
            id: 10,
            inRoomAmenityTypeName: "Cleaning Services",
            inRoomAmenityTypeDescription: "Cleaning Services",
            isDeleted: false,
            inRoomAmenities: [
              {
                id: 38,
                inRoomAmenityName: "Ironing Equipment",
                inRoomAmenityDescription: "Ironing Equipment",
                inRoomAmenityLinkIcon:
                  "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/79968b61-0dfc-41d0-82da-e53c3f16f8d7_Ironing%20Equipment.png",
                isDeleted: false,
                inRoomAmenityTypeId: 10,
              },
            ],
          },
        ],
        propertyImage: [
          {
            id: 33,
            propertyId: 4,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/8a3fea3f-023f-447b-bf62-0d8fea4dc496_0224a120009kk9jnb4C6C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 34,
            propertyId: 4,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/78ae300a-d8f5-42dc-8d12-f452dd4f0743_0225j120009kl826h898C_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 35,
            propertyId: 4,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7fb16b14-c48b-4d5b-851e-58bda2664278_0226b120009kl7w6mC62A_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 36,
            propertyId: 4,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/df7765da-1c1d-4251-920e-3b6cc0b5ccb6_0226d120009kk9iidDCDD_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 37,
            propertyId: 4,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7b9a1bf1-a01a-43c2-b2c8-2ee0b8e8838c_0226q12000aj9k8de1380_R_600_400_R5_D.jpg",
            deleted: false,
          },
          {
            id: 38,
            propertyId: 4,
            link: "https://holiday-swap-file-resouces.s3.ap-southeast-1.amazonaws.com/7c091784-940b-4d2b-9bc1-41d5a9b38c01_02245120009kl82rcA53F_R_600_400_R5_D.jpg",
            deleted: false,
          },
        ],
      },
      availableTimes: [
        {
          id: 11,
          startTime: 1830470400000,
          endTime: 1830816000000,
          pricePerNight: 12,
          status: "OPEN",
          timeFrameId: 6,
          deleted: false,
        },
      ],
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    sort: {
      sorted: true,
      unsorted: false,
      empty: false,
    },
    offset: 0,
    unpaged: false,
    paged: true,
  },
  last: false,
  totalPages: 2,
  totalElements: 12,
  first: true,
  numberOfElements: 10,
  size: 10,
  number: 0,
  sort: {
    sorted: true,
    unsorted: false,
    empty: false,
  },
  empty: false,
};

const ListResort = () => {
  const [page, setPage] = useState<string>("0");
  const [listResort, setListResort] = useState<any>();
  const [totalPages, setTotalPages] = useState<any>();

  useEffect(() => {
    const getList = async () => {
      const list = await axios.get(
        `https://holiday-swap.click/api/v1/resorts?pageNo=${page}&pageSize=9`
      );
      setListResort(list.data);
      setTotalPages(list.data?.totalPages);
    };
    getList();
  }, [page]);

  const handleChangePage = async (pageNo: any) => {
    setPage(pageNo);
  };

  return (
    <Fragment>
      <div className="bg-white px-[50px] flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-[30px]">
          {listResort?.content?.map((item: any) => (
            <CardListResort key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mb-7">
        <Pagination totalPages={totalPages} onPageChange={handleChangePage} />
      </div>
    </Fragment>
  );
};

export default ListResort;
