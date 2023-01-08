import React from "react";
import { useSelector } from "react-redux";
import { FoodD } from "../types";

function OrderFee() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const deliveryFee = useSelector(
    (state: any) => state.cartReducer.deliveryFee
  );

  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total: number, item: FoodD) => total + Number(item.price),
        0
      )
    );
  }, [cartItems]);

  return (
    <div className="flex flex-col gap-4 px-4 font-roboto">
      <div className="flex justify-between">
        <p className="text-base text-[#F9EFBC] font-normal capitalize">
          subtotal
        </p>
        <p className="text-base text-[#F9EFBC] font-normal">AED {totalPrice}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#4E3C11] font-normal capitalize">
          delivery fee
        </p>
        <p className="text-base text-[#4E3C11] font-normal">
          AED {deliveryFee}
        </p>
      </div>
    </div>
  );
}

export default OrderFee;
