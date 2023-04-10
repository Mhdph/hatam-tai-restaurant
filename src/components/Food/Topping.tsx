import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTopping, removeTopping } from "../../app/toppingSlice";
import { translate } from "../../i18n";

function Topping(props: any) {
  const { name, price, quantity, food, choiceList } = props.product;
  const [check, setCheck] = React.useState(false);
  const totalprice = price;
  const PF = "https://api.hatimaltairestaurant.com/images/";
  const dispatch = useDispatch();
  const language = localStorage.getItem("language");

  const addToCart = () => {
    let newItem = {
      name,
      price,
      quantity,
      totalprice,
      food,
    };
    dispatch(addTopping(newItem));
  };

  const removeCartItem = () => {
    dispatch(removeTopping(props.product));
  };

  return (
    <div>
      {!choiceList && (
        <div
          className={clsx(
            language === "EN"
              ? "left_direction font-roboto"
              : "right_direction font-iran",
            "flex justify-between"
          )}
        >
          <p
            className={clsx(
              language === "EN" ? "text-[15px] " : "text-base",
              "font-medium mt-2 text-[#F9EFBC] capitalize"
            )}
          >
            {language === "EN" ? name.ar : name.en}
          </p>
          <div className="flex items-center gap-2">
            <p
              className={clsx(
                language === "EN" ? "" : "ml-5",
                "font-bold my-2 font-roboto text-[15px] text-[#F9EFBC] uppercase"
              )}
            >
              AED {price}
            </p>
            <label className="containerTopping">
              <input
                onChange={(e) => setCheck(!check)}
                onClick={check ? () => removeCartItem() : () => addToCart()}
                type="checkbox"
              />
              <span className="checkmarkTopping"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topping;
