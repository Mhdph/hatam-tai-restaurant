import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../../app/CardSlice";
import { ommlet } from "../../assets";
import CardDesc from "./CardDesc";
function Food(props: any) {
  const { image, name, desc, price, _id, quantity } = props.product;
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
      />
      <div className="pt-6 px-6">
        <div className="card-food z-10 justify-between flex items-center">
          <div
            onClick={
              desc.en.length > 10 ? handleOpen : () => console.log("nothing")
            }
            className="p-2 cursor-pointer flex items-center"
          >
            <img src={PF + image} className="rounded-3xl h-28 w-28" alt="" />
            <div className="flex-col mx-4">
              <p
                className={clsx(
                  language === "EN"
                    ? "text-2xl font-bold"
                    : "text-2xl font-bold",
                  " text-main-color capitalize"
                )}
              >
                {language === "EN" ? name.en : name.ar}
              </p>
              <p
                className={clsx(
                  language === "EN"
                    ? "font-roboto text-sm font-medium "
                    : "font-bernardo text-xl mt-2 font-normal",
                  " text-secondary-color capitalize"
                )}
              >
                {language === "EN"
                  ? desc.en.slice(0, 20)
                  : desc.ar.slice(0, 20)}
                {desc.en.length > 20 ? "..." : null}
              </p>
            </div>
          </div>
          <div className="flex-col px-2 md:px-2 justify-around">
            <p className="font-normal mb-4 text-base text-center font-roboto text-secondary-color uppercase">
              AED {price}
            </p>
            <button
              onClick={() => addToCart()}
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
