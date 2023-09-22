// "use client";
// import React, { useState } from "react";
// import Container from "../Container";
// import Link from "next/link";

// export default function RechargeCard() {
//   const [clickedCard, setClickedCard] = useState(null);

//   const handleCardClick = (index) => {
//     if (clickedCard === index) {
//       // Nếu bạn bấm vào thẻ đã được chọn, hãy tắt nó đi
//       setClickedCard(null);
//     } else {
//       // Nếu bạn bấm vào thẻ khác, hãy chọn nó
//       setClickedCard(index);
//     }
//   };

//   const cardData = [
//     {
//       text: "100 point",
//       price: "120.000 VND",
//     },
//     {
//       text: "200 point",
//       price: "230.000 VND",
//     },
//     {
//       text: "300 point",
//       price: "340.000 VND",
//     },
//     {
//       text: "400 point",
//       price: "450.000 VND",
//     },
//     {
//       text: "500 point",
//       price: "560.000 VND",
//     },
//     {
//       text: "600 point",
//       price: "670.000 VND",
//     },
//   ];

//   return (
//     <div className="px-20">
//       <div>
//         <div className="text-[35px] font-bold text-common border border-gray-500 px-3 py-3 justify-center rounded-3xl flex flex-row my-10 items-center">
//           <div> Nạp tiền qua Vn Pay</div>
//           <input className="w-[30px] h-[30px] ml-3" type="checkbox" />
//         </div>
//       </div>
//       <div className="flex flex-row items-center justify-between w-full">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className={`w-[300px] h-auto bg-white shadow-2xl rounded-lg flex flex-col items-center py-10 mr-2 ${
//               clickedCard === index ? "border border-red-500" : ""
//             }`}
//             onClick={() => handleCardClick(index)}
//           >
//             <div className="px-10 flex flex-row items-center justify-center">
//               <div className="text-[30px] font-bold">{card.text}</div>
//               <img
//                 className="w-[50px] h-[50px] ml-5"
//                 src="./images/point.jpg"
//                 alt=""
//               />
//             </div>
//             <div className="text-[20px] py-5">{card.price}</div>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-row w-full justify-center">
//         <div className="flex flex-col items-center mt-16">
//           <div className="text-common text-[30px] font-bold mb-4">
//             Nhập số lượng point cần nạp
//           </div>
//           <input
//             className="border border-gray-500 w-[700px] px-4 py-2"
//             type="text"
//           />
//           <Link
//             className=" bg-[#5C98F2] px-4 py-4 rounded-xl text-white mt-10 hover:bg-blue-500"
//             href="https://www.sandbox.paypal.com/cgi-bin/webscr"
//           >
//             Thanh Toán
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";

export default function RechargeCard() {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (index) => {
    if (clickedCard === index) {
      // Nếu bạn bấm vào thẻ đã được chọn, hãy tắt nó đi
      setClickedCard(null);
    } else {
      // Nếu bạn bấm vào thẻ khác, hãy chọn nó
      setClickedCard(index);
    }
  };

  const cardData = [
    {
      text: "100 point",
      price: "120.000 VND",
    },
    {
      text: "200 point",
      price: "230.000 VND",
    },
    {
      text: "300 point",
      price: "340.000 VND",
    },
    {
      text: "400 point",
      price: "450.000 VND",
    },
    {
      text: "500 point",
      price: "560.000 VND",
    },
    {
      text: "600 point",
      price: "670.000 VND",
    },
  ];

  return (
    <div className="px-20">
      <div className="px-20">
        <div className="text-[35px] font-bold text-common border border-gray-500 px-3 py-3 justify-center rounded-3xl flex flex-row my-10 items-center">
          <div> Nạp tiền qua Vn Pay</div>
          <input className="w-[30px] h-[30px] ml-3" type="checkbox" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`w-[300px] h-auto bg-white shadow-2xl rounded-lg flex flex-col items-center py-10 mb-4 ${
                clickedCard === index ? "border border-red-500" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="px-10 flex flex-row items-center justify-center">
                <div className="text-[30px] font-bold">{card.text}</div>
                <img
                  className="w-[50px] h-[50px] ml-5"
                  src="./images/point.jpg"
                  alt=""
                />
              </div>
              <div className="text-[20px] py-5">{card.price}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col items-center mt-16">
            <div className="text-common text-[30px] font-bold mb-4">
              Nhập số lượng point cần nạp
            </div>
            <input
              className="border border-gray-500 w-[700px] px-4 py-2"
              type="text"
            />
            <Link
              className=" bg-[#5C98F2] px-4 py-4 rounded-xl text-white mt-10 hover:bg-blue-500"
              href="https://www.sandbox.paypal.com/cgi-bin/webscr"
            >
              Thanh Toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
