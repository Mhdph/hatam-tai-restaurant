import React from "react";

function OrderFee() {
  return (
    <div className="flex flex-col gap-4 px-4 font-roboto">
      <div className="flex justify-between">
        <p className="text-base text-[#F9EFBC] font-normal capitalize">
          subtotal
        </p>
        <p className="text-base text-[#F9EFBC] font-normal"> AED 78.50</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#4E3C11] font-normal capitalize">
          delivery fee
        </p>
        <p className="text-base text-[#4E3C11] font-normal"> AED 12.00</p>
      </div>
    </div>
  );
}

export default OrderFee;
