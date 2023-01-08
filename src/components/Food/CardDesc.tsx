import React from "react";
import { ommlet, Kashi } from "../../assets";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

function CardDesc() {
  return (
    <div className="h-screen font-roboto">
      <Header title="Break Fast" />
      <div className="p-6">
        <div className="card-food z-10 flex flex-col justify-between items-center">
          <div className="p-2 pt-4 flex gap-20">
            <img src={ommlet} className="rounded-3xl" alt="" />
            <div className="flex-col flex items-center justify-between">
              <p className="font-bold text-2xl text-main-color capitalize">
                omelette
              </p>
              <p className="font-normal my-4 text-base text-main-color uppercase">
                AED 29.00
              </p>
              <button className="text-sm font-normal w-24 h-6 text-main-color uppercase add-button">
                +ADD
              </button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-base font-medium text-center text-main-color capitalize">
              10 Non cooked, wooden skewers: 2 meat kebab, 2 chicken kebab, 2
              saffron chicken, 2 chicken tikka and 2 meat tikka with fresh bread{" "}
            </p>
          </div>
          <div className="topping flex w-3/4 flex-col p-2 mt-8 mb-4">
            <p className="font-bold text-2xl text-main-color capitalize">
              toppings:
            </p>
            <div className="flex justify-between">
              <p className="font-normal my-4 text-base text-[#F9EFBC] capitalize">
                tomatoes{" "}
              </p>
              <div className="flex gap-1">
                <p className="font-bold my-4 text-base text-[#F9EFBC] uppercase">
                  AED 29.00
                </p>
                <input
                  type="checkbox"
                  className="border-white bg-transparent before:contents"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-40" alt="" />
      <Footer />
    </div>
  );
}

export default CardDesc;
