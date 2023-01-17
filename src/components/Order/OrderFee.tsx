import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { translate } from "../../i18n";
import { FoodD } from "../../types";

function OrderFee() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const deliveryFee = useSelector(
    (state: any) => state.cartReducer.deliveryFee
  );
  const language = localStorage.getItem("language");
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total: number, item: any) => total + Number(item.totalPrice),
        0
      )
    );
  }, [cartItems]);

  return (
    <div
      className={clsx(
        language === "EN"
          ? "left_direction font-roboto"
          : "right_direction font-bernardo",
        "flex flex-col gap-4 px-4 font-roboto"
      )}
    >
      <div className="flex justify-between">
        <p className="text-base text-[#F9EFBC] font-normal capitalize">
          {translate("subtotal", language)}
        </p>
        <p className="text-base text-[#F9EFBC] font-roboto font-normal">
          AED {totalPrice}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#4E3C11] font-normal capitalize">
          {translate("delivery fee", language)}
        </p>
        <p className="text-base font-roboto text-[#4E3C11] font-normal">
          AED {deliveryFee}
        </p>
      </div>
    </div>
  );
}

export default OrderFee;
