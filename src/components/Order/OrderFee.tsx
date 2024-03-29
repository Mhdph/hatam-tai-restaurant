import clsx from "clsx";
import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { GetDeliveryFee } from "../../config";
import { translate } from "../../i18n";
import { FoodD } from "../../types";
import Loading from "../Coustom/Loading";

function OrderFee() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const deliveryFee = useSelector(
    (state: any) => state.cartReducer.deliveryFee
  );
  const toppingItems = useSelector((state: any) => state.topping.value);

  const language = localStorage.getItem("language");
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalToppingPrice, setTotalToppingPrice] = React.useState(0);

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

  const { data, error, isLoading } = useQuery({
    queryKey: ["deliveryFee"],
    queryFn: GetDeliveryFee,
  });

  if (isLoading) return <Loading />;

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
          AED {totalPrice + totalToppingPrice}.00
        </p>
      </div>
      {/* <div className="flex justify-between">
        <p className="text-base text-[#4E3C11] font-normal capitalize">
          {translate("delivery fee", language)}
        </p>
        <p className="text-base font-roboto text-[#4E3C11] font-normal">
          AED {+data.delivery}.00
        </p>
      </div> */}
    </div>
  );
}

export default OrderFee;
