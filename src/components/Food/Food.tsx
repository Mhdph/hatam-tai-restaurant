import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../../app/CardSlice";
import { ommlet } from "../../assets";
import CardDesc from "./CardDesc";
function Food(props: any) {
  const { image, name, desc, price, topping, quantity, limitTopping, popUp } =
    props.product;
  const [open, setOpen] = React.useState(false);
  const totalprice = price;
  const PF = "http://api.hammtimm.ir/images/";
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

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <CardDesc
        image={image}
        name={name}
        desc={desc}
        price={price}
        open={open}
        setopen={setOpen}
        handleOpen={handleOpen}
        quantity={quantity}
        limitTopping={limitTopping}
      />
      <div className="pt-6 px-6">
        <div className="card-food z-10 justify-between flex items-center">
          <div
            onClick={popUp ? handleOpen : () => console.log("nothing")}
            className="p-2 cursor-pointer flex items-center"
          >
            <img src={PF + image} className="rounded-3xl h-28 w-28" alt="" />
            <div className="flex-col mx-4">
              <p
                className={clsx(
                  language === "EN"
                    ? "text-base xs:text-base font-bold"
                    : "text-base xs:text-xl font-bold",
                  " text-main-color mt-3 capitalize"
                )}
              >
                {language === "EN" ? name.en : name.ar}
              </p>
              <p
                className={clsx(
                  language === "EN"
                    ? "font-roboto text- xs:text-base font-medium "
                    : "font-bernardo text-base mt-2 font-normal",
                  " text-secondary-color capitalize"
                )}
              >
                {language === "EN" && popUp ? desc.en.slice(0, 20) : null}
                {language === "AR" && popUp ? desc.ar.slice(0, 20) : null}
                {popUp ? "..." : null}
                {language === "EN" && popUp === false ? desc.en : null}
                {language === "AR" && popUp === false ? desc.ar : null}
              </p>
            </div>
          </div>
          <div className="flex-col px-2 md:px-2 justify-around">
            <p className="font-normal mb-4 text-base text-center font-roboto text-secondary-color uppercase">
              AED {price}
            </p>
            <button
              onClick={topping ? () => handleOpen() : () => addToCart()}
              className="text-sm font-normal font-roboto w-20 h-6 text-main-color uppercase add-button"
            >
              +ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
