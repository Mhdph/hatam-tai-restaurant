import React from "react";
import { ArKashi, Kashi } from "../assets";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Coustom/Button";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Order from "../components/Order/Order";
import OrderFee from "../components/Order/OrderFee";
import OrderFeeTotal from "../components/Order/OrderFeeTotal";
import { translate } from "../i18n";
import ToppingsSummery from "../components/Food/ToppingsSummery";
import clsx from "clsx";

function OrderSummery() {
  const language = localStorage.getItem("language");
  return (
    <div className="xs:h-screen h-full ">
      <Arrowback />
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-iran"
        )}
      >
        <Header title={translate("Order Summary", language)} />
        <div className="p-4 md:px-8">
          <Order />
          <hr className=" border-opacity-30 border-[0.1px] my-4 border-secondary-color" />
          <ToppingsSummery />
          <hr className=" border-opacity-30 border-[0.1px] my-4 border-secondary-color" />
          <OrderFee />
          <hr className=" border-opacity-30 border-[0.1px] my-4 border-secondary-color" />
          <OrderFeeTotal />
          <div className="mt-40 mb-10">
            <Button
              title={translate("continue", language)}
              addres="/delivery"
            />
          </div>
        </div>
      </div>
      <img
        src={language === "EN" ? Kashi : ArKashi}
        className={clsx(
          language === "EN" ? "right-16" : "right-2",
          "-z-10 absolute -bottom-20 md:-bottom-0 md:top-44"
        )}
        alt=""
      />
      <Footer />
    </div>
  );
}

export default OrderSummery;
