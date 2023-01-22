import { transcode } from "buffer";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { translate } from "../../i18n";
import { FoodD } from "../../types";

function Bucket() {
  const cartItems = useSelector((state: any) => state.cartReducer.value);
  const quantity = useSelector((state: any) => state.cartReducer.quantity);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total: number, item: any) => total + Number(item.totalprice),
        0
      )
    );
  }, [cartItems]);

  const language = localStorage.getItem("language");
  return (
    <div className="px-6 fixed bottom-0 w-full mb-28  mt-2">
      <Link to="/ordersummery" className="w-full cursor-pointer">
        <div className="bg-[#9D7822] h-10 flex justify-between items-center py-2 rounded-[20px]">
          <div className="flex gap-2 items-center">
            <div className="bg-white text-[#9D7822] text-center mx-4 flex items-center rounded-full w-5 h-5 py-2">
              <p className="mx-1.5 text-sm font-roboto"> {quantity} </p>
            </div>
            <p
              className={clsx(
                language === "EN" ? "font-roboto" : "font-bernardo",
                "font-bold  capitalize text-white"
              )}
            >
              {translate("review order", language)}
            </p>
          </div>
          <div className="mx-4">
            <p className="text-white uppercase font-roboto font-bold">
              aed {totalPrice}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Bucket;
