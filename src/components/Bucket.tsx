import React from "react";
import { Link } from "react-router-dom";

function Bucket() {
  return (
    <div className="px-6">
      <Link to="/ordersummery" className="w-full font-roboto  cursor-pointer">
        <div className="bg-[#9D7822] h-10 flex justify-between items-center py-2 rounded-[20px]">
          <div className="flex gap-2 items-center">
            <div className="bg-white text-[#9D7822] text-center ml-4 flex items-center rounded-full w-5 h-5 py-2">
              <p className="ml-1.5 text-sm"> 0 </p>
            </div>
            <p className="font-bold  capitalize text-white">review order</p>
          </div>
          <div className="mr-4">
            <p className="text-white uppercase font-bold">aed 0.0</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Bucket;
