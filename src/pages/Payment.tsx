import React from "react";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderFee from "../components/OrderFee";
import OrderFeeTotal from "../components/Order/OrderFeeTotal";

function Payment() {
  const [cashMethod, setCashMethod] = React.useState("");

  const updateCash = (e: any) => {
    setCashMethod(e.target.value);
  };

  return (
    <div className="font-roboto h-screen px-6">
      <Arrowback />
      <Header title="payment method" />
      <div className="">
        <p className="text-secondary-color pl-2 mb-4 font-semibold text-[20px] capitalize">
          select your payment method
        </p>
        <div className="payment mb-4 pl-4 px-2 py-4 flex items-center ">
          <div className="flex items-center gap-3">
            <label className="container">
              <input
                name="default-radio"
                value="cash on delivery"
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>
            <p className="text-secondary-color text-base capitalize font-semibold">
              cash on delivery
            </p>
          </div>
        </div>
        <div className="payment mb-4 pl-4 px-2 py-4 flex items-center ">
          <div className="flex items-center gap-3">
            <label className="container">
              <input
                name="default-radio"
                value="card on delivery"
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>
            <p className="text-secondary-color text-base capitalize font-semibold">
              card on delivery
            </p>
          </div>
        </div>
        <div className="payment mb-4 pl-4 px-2 py-4 flex items-center ">
          <div className="flex items-center gap-3">
            <label className="container">
              <input
                name="default-radio"
                value="other option of payment"
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>
            <div className="flex w-full flex-col">
              <p className="text-secondary-color text-base capitalize font-semibold">
                other option of payment
              </p>
              <p className="text-[#E7D5AA] capitalize text-xs font-semibold">
                Please contact us on whats app (026220095)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 py-3 subtotal">
        <OrderFee />
        <hr className=" border-opacity-30 border-[0.1px] my-4 border-[#4e3c114d]" />
        <OrderFeeTotal />
      </div>
      <div className="mt-12 mb-6">
        <Button title="place order" addres="/complate" />
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
