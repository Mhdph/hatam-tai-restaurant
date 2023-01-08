import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../app/CardSlice";
import { Minus, Plus } from "../assets";
import { FoodD } from "../types";

function Order() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const dispatch = useDispatch();

  // const [quantity, setQuantity] = React.useState(props.item.quantity);

  // React.useEffect(() => {
  //   setItem(props.item);
  //   setQuantity(props.item.quantity);
  // }, [props.item]);

  // const updateQuantity = (opt) => {
  //   if (opt === "+") {
  //     dispatch(updateItem({ ...item, quantity: quantity + 1 }));
  //   }
  //   if (opt === "-") {
  //     dispatch(
  //       updateItem({
  //         ...item,
  //         quantity: quantity - 1 === 0 ? 1 : quantity - 1,
  //       })
  //     );
  //   }
  // };

  return (
    <div className="flex flex-col justify-center w-full gap-2">
      {cartItems.map((item: FoodD) => (
        <div className="input_custom flex py-3 items-center justify-around ">
          <div className="flex-col">
            <p className="font-bold capitalize text-xl text-[#4E3C11]">
              {item.name}{" "}
            </p>
            <p className="font-base text-white font-normal">
              {/* {item.toppings.map()} */}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img className="cursor-pointer" src={Minus} />
            <p className="font-bold text-xl text-main-color">1</p>
            <img className="cursor-pointer" src={Plus} alt="" />
          </div>
          <div>
            <p className="text-base text-[#F9EFBC] font-bold">
              AED {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
