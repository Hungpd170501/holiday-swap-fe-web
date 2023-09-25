"use client";
import ReviewModal from "@/app/components/modal/ReviewModal";
import React, { useState } from "react";
import Link from "next/link";
import BookingReview from "@/app/components/dashboard/BookingReview";

export default function Review() {
  const [showModal, setShowModal] = useState(false);

  const handleReviewClick = () => {
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="mb-10">
        <BookingReview />
      </div>
      <div className="mb-10">
        <BookingReview />
      </div>
      <div className="mb-10">
        <BookingReview />
      </div>
    </>
  );
}
