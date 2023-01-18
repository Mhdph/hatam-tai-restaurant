import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItem } from "../../app/CardSlice";
import { Minus, Plus } from "../../assets";
import { FoodD } from "../../types";

function OrderSummeryItem(props: any) {
  const [item, setItem] = React.useState(props.item);
  const [quantity, setQuantity] = React.useState(props.item.quantity);
  const [mahdiPrice, setMahdiPrice] = React.useState(0);
  const language = localStorage.getItem("language");
  const price = props.item.price;
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  React.useEffect(() => {
    setMahdiPrice(
      cartItems.reduce((total: number, item: any) => Number(item.totalPrice), 0)
    );
  }, [cartItems]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt: string) => {
    if (opt === "+") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity + 1,
          totalprice: price * (quantity + 1),
        })
      );
    }
    if (opt === "-") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1,
          totalprice: price / (quantity + 1),
        })
      );
    }
  };

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="input_custom flex py-3 items-center justify-around ">
      <div className="flex-col">
        <p className="font-bold capitalize text-xl text-[#4E3C11]">
          {language === "EN" ? item.name.en : item.name.ar}
        </p>
        <p className="font-base text-white font-normal">
          {/* {item.toppings.map()} */}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <img
          className="cursor-pointer"
          src={Minus}
          onClick={
            quantity === 1 ? () => removeCartItem() : () => updateQuantity("-")
          }
        />
        <p className="font-bold text-xl text-main-color">{quantity}</p>
        <img
          className="cursor-pointer"
          src={Plus}
          alt=""
          onClick={() => updateQuantity("+")}
        />
      </div>
      <div>
        <p className="text-base text-[#F9EFBC] font-bold">
          AED {props.item.totalPrice}
        </p>
      </div>
    </div>
  );
}

export default OrderSummeryItem;
