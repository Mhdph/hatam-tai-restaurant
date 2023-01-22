import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import clsx from "clsx";
import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/CardSlice";
import { ommlet, Kashi } from "../../assets";
import { getToppingFn } from "../../config";
import { translate } from "../../i18n";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Loading from "../Coustom/Loading";
import Topping from "./Topping";
const PF = "http://api.hammtimm.ir/images/";

function CardDesc({
  open,
  handleOpen,
  image,
  name,
  desc,
  price,
  quantity,
}: any) {
  const { isLoading, data, error } = useQuery("get all toppings", async () => {
    return await getToppingFn(name);
  });
  if (isLoading) return <Loading />;
  const language = localStorage.getItem("language");
  const totalprice = price;
  const dispatch = useDispatch();
  const addToCart = () => {
    let newItem = {
      name,
      desc,
      price,
      quantity,
      totalprice,
    };
    dispatch(addItem(newItem));
  };

  return (
    <div>
      <div onClick={handleOpen}></div>
      <Dialog
        className=" w-full modal_bg max-w-full overflow-y-scroll mb-48"
        open={open}
        size="sm"
        handler={handleOpen}
      >
        <DialogBody>
          <div
            className={clsx(
              language === "EN" ? "left_direction" : "right_direction",
              "p-6"
            )}
          >
            <div className="card-food z-10 flex flex-col justify-between items-center">
              <div className="p-2 pt-4 flex gap-10">
                <img
                  src={PF + image}
                  className="rounded-3xl h-36 w-[136px]"
                  alt=""
                />
                <div className="flex-col flex items-center justify-around my-4">
                  <p
                    className={clsx(
                      language === "EN" ? "font-roboto" : "font-iran",
                      "font-bold text-lg text-main-color capitalize"
                    )}
                  >
                    {language === "EN" ? name.en : name.ar}
                  </p>
                  <p className="font-normal my-4 text-base text-secondary-color uppercase">
                    AED {price}
                  </p>
                  <button
                    onClick={() => addToCart()}
                    className="text-sm font-normal w-24 h-6 text-main-color uppercase add-button"
                  >
                    +ADD
                  </button>
                </div>
              </div>

              <div className="p-4">
                <p
                  className={clsx(
                    language === "EN" ? "font-roboto" : "font-bernardo",
                    "text-base font-medium text-center text-secondary-color"
                  )}
                >
                  {language === "EN" ? desc.en : desc.ar}
                </p>
              </div>
              {data.length > 0 ? (
                <div className="w-full px-6">
                  <div className="topping flex px-6 py-3 flex-col mt-2 mb-4">
                    <div className="flex justify-between">
                      <p
                        className={clsx(
                          language === "EN" ? "font-roboto" : "font-iran",
                          "font-bold text-2xl text-main-color capitalize"
                        )}
                      >
                        {translate("toppings", language)}:
                      </p>
                    </div>
                    {data.map((item: any) => (
                      <Topping nameGhaza={name} product={item} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
}

export default CardDesc;
