import React from "react";
import { useSelector } from "react-redux";
import { FoodD } from "../types";

function OrderFeeTotal() {
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
    <div className="flex justify-between px-4">
      <p className="text-base text-main-color font-bold capitalize">total </p>
      <p className="text-base text-main-color font-normal">
        AED {totalPrice + deliveryFee}
      </p>
    </div>
  );
}

export default OrderFeeTotal;
