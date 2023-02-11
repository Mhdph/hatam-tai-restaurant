import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { translate } from "../../i18n";
import { FoodD } from "../../types";

function OrderFeeTotal() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const deliveryFee = useSelector(
    (state: any) => state.cartReducer.deliveryFee
  );
  const [totalPrice, setTotalPrice] = React.useState(0);
  const toppingItems = useSelector((state: any) => state.topping.value);
  const [totalToppingPrice, setTotalToppingPrice] = React.useState(0);

  const language = localStorage.getItem("language");
  React.useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total: number, item: any) => total + Number(item.totalprice),
        0
      )
    );
  }, [cartItems]);
  React.useEffect(() => {
    setTotalToppingPrice(
      toppingItems.reduce(
        (total: number, item: any) => total + Number(item.totalprice),
        0
      )
    );
  }, [toppingItems]);
  return (
    <div
      className={clsx(
        language === "EN"
          ? "left_direction font-roboto"
          : "right_direction font-bernardo",
        "flex justify-between px-4"
      )}
    >
      <p className="text-base text-main-color font-bold capitalize">
        {translate("total", language)}{" "}
      </p>
      <p className="text-base font-bold font-roboto text-main-color">
        AED {totalPrice + deliveryFee + totalToppingPrice}.00
      </p>
    </div>
  );
}

export default OrderFeeTotal;
