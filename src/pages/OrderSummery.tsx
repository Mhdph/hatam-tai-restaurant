import React from "react";
import { Kashi } from "../assets";
import Arrowback from "../components/Arrowback";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Order from "../components/Order";
import OrderFee from "../components/OrderFee";
import OrderFeeTotal from "../components/OrderFeeTotal";

function OrderSummery() {
  return (
    <div className=" h-screen font-roboto">
      <Arrowback />
      <Header title="Order Summary" />
      <div className="p-4 md:px-8">
        <Order />
        <hr className=" border-opacity-30 border-[0.1px] my-4 border-[#4e3c114d]" />
        <OrderFee />
        <hr className=" border-opacity-30 border-[0.1px] my-4 border-[#4e3c114d]" />
        <OrderFeeTotal />
        <div className="mt-40 mb-10">
          <Button title="continue" addres="/delivery" />
        </div>
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-32" alt="" />
      <Footer />
    </div>
  );
}

export default OrderSummery;
