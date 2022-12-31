import React from "react";
import logo from "../assets/circle logo.png";
import ommlet from "../assets/ommlet.png";
import Footer from "../components/Footer";
import Kashi from "../assets/kashi.png";
import Arrowback from "../components/Arrowback";
import Bucket from "../components/Bucket";
function Main() {
  const [first, setfirst] = React.useState(false);

  return (
    <div className={`${first ? "blur-xs" : ""} h-screen font-roboto`}>
      <Arrowback />
      <div className="flex mb-6 justify-between px-3 items-center">
        <p className="font-bold text-4xl  text-main-color">Main</p>
        <img src={logo} alt="" />
      </div>
      <div className="p-6">
        <div className="card-food z-10 flex justify-between items-center">
          <div className="p-2">
            <img src={ommlet} className="rounded-3xl" alt="" />
          </div>
          <div className="flex-col">
            <p className="font-bold text-2xl text-main-color capitalize">
              omelette
            </p>
            <p className="text-base font-medium text-main-color capitalize">
              2 Iranian bread
            </p>
          </div>
          <div className="flex-col pr-2 justify-around">
            <p className="font-normal mb-4 text-base text-main-color uppercase">
              AED 29.00
            </p>
            <button className="text-sm font-normal w-20 h-6 text-main-color uppercase add-button">
              +ADD
            </button>
          </div>
        </div>
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
      <Bucket />
      <Footer fixed />
    </div>
  );
}

export default Main;
