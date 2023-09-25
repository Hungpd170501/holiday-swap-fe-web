import ExchangeReview from "@/app/components/dashboard/ExchangeReview";
import React from "react";

export default function ReviewExchange() {
  return (
    <div>
      <div>
        Dashboard {">"} <span className="text-common">Review Exchange</span>
      </div>
      <div>
        <ExchangeReview />
      </div>
    </div>
  );
}
