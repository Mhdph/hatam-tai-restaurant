import React from "react";
import { Minus, Plus } from "../assets";

function Order() {
  return (
    <div className="input_custom flex py-3 items-center justify-around ">
      <div className="flex-col">
        <p className="font-bold capitalize text-xl text-[#4E3C11]">
          kubideh meat
        </p>
        <p className="font-base text-white font-normal">pomegranet, butter</p>
      </div>
      <div className="flex gap-2 items-center">
        <img className="cursor-pointer" src={Minus} />
        <p className="font-bold text-xl text-main-color">1</p>{" "}
        <img className="cursor-pointer" src={Plus} alt="" />
      </div>
      <div>
        <p className="text-base text-[#F9EFBC] font-bold"> AED 78.50</p>
      </div>
    </div>
  );
}

export default Order;
