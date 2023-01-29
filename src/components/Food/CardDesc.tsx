import { Dialog, DialogBody } from "@material-tailwind/react";
import axios from "axios";
import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/CardSlice";
import { baseUrl } from "../../config";
import { translate } from "../../i18n";
import Loading from "../Coustom/Loading";
import Topping from "./Topping";
import YourChoise from "./YourChoise";
const PF = "http://api.hammtimm.ir/images/";

function CardDesc({
  open,
  handleOpen,
  image,
  name,
  desc,
  price,
  quantity,
  limitTopping,
}: any) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const getTopping = async () => {
    try {
      const res = await axios.get<any>(`${baseUrl}/topping/${name.en}`);
      console.log(res);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  React.useEffect(() => {
    getTopping();
  }, [name.en]);

  if (loading) return <Loading />;
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
  console.log(limitTopping);
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
                      "font-bold text-2xl text-main-color capitalize"
                    )}
                  >
                    {language === "EN" ? name.en : name.ar}
                  </p>
                  <p className="font-normal my-4 text-base text-secondary-color uppercase">
                    AED {price}.00
                  </p>
                  <button
                    onClick={() => addToCart()}
                    className="text-sm font-normal w-24 h-6 text-main-color uppercase outline-none add-button"
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
                    <div className="flex justify-between items-center">
                      <p
                        className={clsx(
                          language === "EN" ? "font-roboto" : "font-iran",
                          "font-bold text-xl text-main-color capitalize"
                        )}
                      >
                        {translate("your choise", language)}:
                        <p className="text-[13px]">(Choose 1)</p>
                      </p>
                    </div>
                    {data.map((item: any) => (
                      <div>
                        {item.choiceList === true ? (
                          <YourChoise nameGhaza={name.en} product={item} />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {data.length > 0 ? (
                <div className="w-full px-6">
                  <div className="topping flex px-6 py-3 flex-col mt-2 mb-4">
                    <div className="flex justify-between items-center">
                      <p
                        className={clsx(
                          language === "EN" ? "font-roboto" : "font-iran",
                          "font-bold text-2xl text-main-color capitalize"
                        )}
                      >
                        {translate("toppings", language)}:
                      </p>
                      {limitTopping > 0 && (
                        <p className="font-roboto text-[11px] font-medium text-secondary-color">
                          (choose up to {limitTopping} items)
                        </p>
                      )}
                    </div>
                    {data.map((item: any) => (
                      <div>
                        <Topping nameGhaza={name.en} product={item} />
                      </div>
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
