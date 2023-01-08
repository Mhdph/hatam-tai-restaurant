import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FoodD } from "../../types";

function Bucket() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const quantity = useSelector((state: any) => state.cartReducer.quantity);
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
    <div className="px-6 mt-2">
      <Link to="/ordersummery" className="w-full font-roboto  cursor-pointer">
        <div className="bg-[#9D7822] h-10 flex justify-between items-center py-2 rounded-[20px]">
          <div className="flex gap-2 items-center">
            <div className="bg-white text-[#9D7822] text-center ml-4 flex items-center rounded-full w-5 h-5 py-2">
              <p className="ml-1.5 text-sm"> {quantity} </p>
            </div>
            <p className="font-bold  capitalize text-white">review order</p>
          </div>
          <div className="mr-4">
            <p className="text-white uppercase font-bold">aed {totalPrice}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Bucket;
