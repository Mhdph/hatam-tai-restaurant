import { useDispatch, useSelector } from "react-redux";
import { FoodD } from "../../types";
import OrderSummeryItem from "./OrderSummeryItem";

function Order() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);

  return (
    <div className="flex flex-col justify-center w-full gap-2">
      {cartItems.map((item: FoodD) => (
        <OrderSummeryItem item={item} />
      ))}
    </div>
  );
}

export default Order;
