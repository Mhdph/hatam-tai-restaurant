import React from "react";
import { useDispatch } from "react-redux";
import { addTopping } from "../../app/toppingSlice";

function Topping(props: any) {
  const { name, price, quantity, food } = props.product;
  const [open, setOpen] = React.useState(false);
  const totalprice = price;
  const PF = "http://api.hammtimm.ir/images/";
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

  return (
    <div className="flex justify-between">
      <p className="font-medium mt-2 text-base text-[#F9EFBC] capitalize">
        {name.ar}
      </p>
      <div className="flex items-center gap-2">
        <p className="font-bold my-2 text-base text-[#F9EFBC] uppercase">
          AED {price}.00
        </p>
        <label className="containerTopping">
          <input onClick={() => addToCart()} type="checkbox" />
          <span className="checkmarkTopping"></span>
        </label>
      </div>
    </div>
  );
}

export default Topping;
