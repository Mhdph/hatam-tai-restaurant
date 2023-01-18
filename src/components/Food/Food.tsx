import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../../app/CardSlice";
import { ommlet } from "../../assets";
function Food(props: any) {
  const { image, name, desc, price, _id, quantity } = props.product;
  const totalprice = price;
  const PF = "http://hammtimm.ir/images/";
  const dispatch = useDispatch();
  const language = localStorage.getItem("language");
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
        quantity,
        totalprice,
      };
      if (dispatch(addItem(newItem))) {
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div className="pt-6 px-6">
      <div className="card-food z-10 justify-between flex items-center">
        <div className="p-2 flex items-center">
          <img src={PF + image} className="rounded-3xl h-28 w-28" alt="" />
          <div className="flex-col mx-4">
            <p className="font-bold text-2xl text-main-color capitalize">
              {language === "EN" ? name.en : name.ar}
            </p>
            <p className="text-sm font-medium text-secondary-color capitalize">
              {desc.en.slice(0, 30)}...
            </p>
          </div>
        </div>
        <div className="flex-col px-2 md:px-2 justify-around">
          <p className="font-normal mb-4 text-base text-secondary-color uppercase">
            AED {price}
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
