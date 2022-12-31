import { hatam, hatamarabic, hatamphoto } from "../assets";
import Footer from "../components/Footer";
import Input from "../components/Input";

function Complate() {
  return (
    <div className="font-roboto w-full  h-screen">
      <div className="flex items-center my-12 justify-around">
        <img src={hatam} className="ml-1" alt="" />
        <img src={hatamphoto} alt="" />
        <img src={hatamarabic} alt="" />
      </div>
      <p className="font-semibold text-[20px] text-center capitalize text-secondary-color">
        your order is on it’s way
      </p>
      <div className="px-6 mt-4 ">
        <div className="payment py-12 px-2">
          <p className="text-main-color capitalize font-bold text-2xl text-center ">
            thanks for choosing hatim al tai
          </p>
        </div>
      </div>
      <div className="px-6 mt-52">
        <Footer />
      </div>
    </div>
  );
}

export default Complate;
