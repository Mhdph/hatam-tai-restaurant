import clsx from "clsx";
import { hatam, hatamarabic, hatamphoto } from "../assets";
import Footer from "../components/Common/Footer";
import { translate } from "../i18n";

function Complate() {
  const language = localStorage.getItem("language");
  const orderNumber = localStorage.getItem("orderNumber");
  return (
    <div className="font-roboto w-full  h-screen">
      <div className="flex items-center my-12 justify-around">
        <img src={hatam} className="ml-1" alt="" />
        <img src={hatamphoto} alt="" />
        <img src={hatamarabic} alt="" />
      </div>
      <p
        className={clsx(
          language === "EN" ? "font-roboto" : "font-bernardo",
          "font-semibold  text-[20px] text-center capitalize text-secondary-color"
        )}
      >
        {translate("your order is on it’s way", language)}
      </p>
      <div className="px-6 mt-4 ">
        <div className="payment py-12 px-10">
          <p
            className={clsx(
              language === "EN" ? "font-roboto" : "font-iran",
              "text-main-color capitalize  font-bold text-2xl text-center"
            )}
          >
            {translate("thanks for choosing hatim al tai", language)}
          </p>
          <div className="flex mt-3 flex-col text-base justify-center items-center">
            <p>{translate("ordernumber", language)}</p>
            <p className="font-bold text-2xl">{orderNumber}</p>
          </div>
        </div>
      </div>
      <div className="px-6 mt-96 md:mt-[600px]">
        <Footer />
      </div>
    </div>
  );
}

export default Complate;
