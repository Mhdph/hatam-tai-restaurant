import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../app/CardSlice";
import { FoodD } from "../types";

function Food(props: any) {
  const { image, name, desc, price, id } = props.product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...props.product }));
  };

  const check = () => {
    if (name === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (desc === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      let newItem = {
        image,
        name,
        desc,
        price,
      };
      if (dispatch(addItem(newItem))) {
        toast.success("Food added");
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div className="pt-6 px-6">
      <div className="card-food z-10 flex justify-between items-center">
        <div className="p-2">
          <img src={image} className="rounded-3xl w-20 h-20" alt="" />
        </div>
        <div className="flex-col">
          <p className="font-bold text-2xl text-main-color capitalize">
            {name}
          </p>
          <p className="text-base font-medium text-main-color capitalize">
            {desc}
          </p>
        </div>
        <div className="flex-col pr-2 md:px-2 justify-around">
          <p className="font-normal mb-4 text-base text-main-color uppercase">
            {price}
          </p>
          <button
            onClick={() => addToCart()}
            className="text-sm font-normal w-20 h-6 text-main-color uppercase add-button"
          >
            +ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Food;
