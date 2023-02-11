import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItem } from "../../app/CardSlice";
import { removeTopping, updateTopping } from "../../app/toppingSlice";
import { Minus, Plus } from "../../assets";
import { FoodD } from "../../types";

function ToppingItems(props: any) {
  const [item, setItem] = React.useState(props.item);
  const [quantity, setQuantity] = React.useState(props.item.quantity);
  const language = localStorage.getItem("language");
  const price = props.item.price;
  const dispatch = useDispatch();
  React.useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt: string) => {
    if (opt === "+") {
      dispatch(
        updateTopping({
          ...item,
          quantity: quantity + 1,
          totalprice: price * (quantity + 1),
        })
      );
    }
    if (opt === "-") {
      dispatch(
        updateTopping({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1,
          totalprice: price / (quantity + 1),
        })
      );
    }
  };

  const removeCartItem = () => {
    dispatch(removeTopping(item));
  };

  let mahdi = props.item.totalprice;
  let flt = mahdi.toString().split(".")[1];
  React.useEffect(() => {
    if (!flt) {
      mahdi = props.item.totalprice + ".00";
    } else if (flt.toString().length == 1) {
      mahdi = props.item.totalprice + "0";
    } else {
      mahdi = props.item.totalprice;
    }
  }, [mahdi]);

  return (
    <div className="input_custom flex py-3 items-center justify-between ">
      <div className="flex-col">
        <p
          className={clsx(
            language === "EN" ? "font-roboto" : "font-bernardo",
            "font-bold capitalize mx-2 text-xl text-[#4E3C11]"
          )}
        >
          {language === "EN" ? item.name.ar : item.name.en}
        </p>
        <p className="font-bold capitalize text-xl text-[#4E3C11]"></p>
      </div>
      {language === "EN" ? (
        <div className="flex gap-2 items-center">
          <img
            className="cursor-pointer"
            src={Minus}
            onClick={
              quantity === 1
                ? () => removeCartItem()
                : () => updateQuantity("-")
            }
          />
          <p className="font-bold text-xl font-roboto text-main-color">
            {quantity}
          </p>
          <img
            className="cursor-pointer"
            src={Plus}
            alt=""
            onClick={() => updateQuantity("+")}
          />
          <div>
            <p className="text-base text-[#F9EFBC] font-roboto mx-2 font-bold">
              AED {mahdi}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <img
            className="cursor-pointer"
            src={Plus}
            alt=""
            onClick={() => updateQuantity("+")}
          />
          <p className="font-bold text-xl font-roboto text-main-color">
            {quantity}
          </p>
          <img
            className="cursor-pointer"
            src={Minus}
            onClick={
              quantity === 1
                ? () => removeCartItem()
                : () => updateQuantity("-")
            }
          />

          <p className="text-base text-[#F9EFBC] font-roboto mx-2 font-bold">
            AED {props.item.totalprice}
          </p>
        </div>
      )}
    </div>
  );
}

export default ToppingItems;
