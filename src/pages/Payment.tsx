import React from "react";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Coustom/Button";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import OrderFee from "../components/Order/OrderFee";
import OrderFeeTotal from "../components/Order/OrderFeeTotal";
import { translate } from "../i18n";
import clsx from "clsx";
import axios from "axios";
import { baseUrl } from "../config";
import { useSelector } from "react-redux";

function Payment() {
  const [cashMethod, setCashMethod] = React.useState("");
  const phoneNumber = useSelector(
    (state: any) => state.numberReucer.phoneNumber
  );
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const toppingItems = useSelector((state: any) => state.topping.value);
  const SpecialRequest = useSelector(
    (state: any) => state.numberReucer.SpecialRequest
  );
  const address = useSelector((state: any) => state.user);
  const deliveryFee = useSelector(
    (state: any) => state.cartReducer.deliveryFee
  );
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total: number, item: any) => total + Number(item.totalprice),
        0
      )
    );
  }, [cartItems]);

  const price = totalPrice + deliveryFee;
  const language = localStorage.getItem("language");
  const updateCash = (e: any) => {
    setCashMethod(e.target.value);
  };
  const submitOrder = () => {
    try {
      axios.post(`${baseUrl}/order`, {
        price: price,
        address: address,
        phoneNumber: phoneNumber,
        cashMethod: cashMethod,
        products: cartItems,
        specialReq: SpecialRequest,
        topping: toppingItems,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen">
      <Arrowback />
      <Header title={translate("payment method", language)} />
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-bernardo",
          "px-6"
        )}
      >
        <p className="text-secondary-color pl-2 mb-4 font-semibold text-[20px] capitalize">
          {translate("select your payment method", language)}
        </p>
        <div className="payment mb-4 px-4 py-4 flex items-center ">
          <div className="flex items-center gap-3">
            <label className="container">
              <input
                name="default-radio"
                value="cash on delivery"
                type="checkbox"
                onChange={updateCash}
              />
              <span className="checkmark"></span>
            </label>
            <p className="text-secondary-color text-base capitalize font-semibold">
              {translate("cash on delivery", language)}
            </p>
          </div>
        </div>
        <div className="payment mb-4 px-4 py-4 flex items-center ">
          <div className="flex items-center gap-3">
            <label className="container">
              <input
                name="default-radio"
                value="card on delivery"
                type="checkbox"
                onChange={updateCash}
              />
              <span className="checkmark"></span>
            </label>
            <p className="text-secondary-color text-base capitalize font-semibold">
              {translate("card on delivery", language)}
            </p>
          </div>
        </div>
        <div className="payment mb-4 px-4 py-4 flex items-center ">
          <div className="flex items-center gap-3">
            <label className="container">
              <input
                name="default-radio"
                value="other option of payment"
                type="checkbox"
                onChange={updateCash}
              />
              <span className="checkmark"></span>
            </label>
            <div className="flex w-full flex-col">
              <p className="text-secondary-color text-base capitalize font-semibold">
                {translate("other option of payment", language)}
              </p>
              <p className="text-[#E7D5AA] capitalize text-xs font-semibold">
                {translate("Please contact us on whats app", language)}
                (026220095)
              </p>
            </div>
          </div>
        </div>
        <div className="my-8 py-3 subtotal">
          <OrderFee />
          <hr className=" border-opacity-30 border-[0.1px] my-4 border-[#4e3c114d]" />
          <OrderFeeTotal />
        </div>
        <div className="mt-12 mb-6">
          <Button
            handle={submitOrder}
            title={translate("place order", language)}
            addres="/complate"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
