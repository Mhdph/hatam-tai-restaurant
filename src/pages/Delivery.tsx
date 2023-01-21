import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Kashi } from "../assets";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Coustom/Button";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import React from "react";
import { NumberSlice } from "../app/addNumberSlice";
import { translate } from "../i18n";
import clsx from "clsx";

function Delivery() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    phoneNumber: "",
    SpecialRequest: "",
  });
  const navigate = useNavigate();
  const language = localStorage.getItem("language");
  const handleSubmitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(NumberSlice.actions.saveInfo(data));
    navigate("/payment");
  };

  const changeInput = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Arrowback />
      <Header title={translate("Delivery", language)} />
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-iran",
          "px-4 mt-2"
        )}
      >
        <p className="text-base ml-2 mb-2 font-semibold capitalize text-secondary-color">
          {translate("phone number", language)}
        </p>
        <div>
          <input
            onChange={changeInput}
            name="phoneNumber"
            type="text"
            className="py-1.5 rounded-[20px] outline-none w-3/4 px-3"
          />
        </div>
        <p className="text-base mt-4 mb-2 ml-2 font-semibold capitalize text-secondary-color">
          {translate("address", language)}
        </p>
        <textarea
          onClick={() => navigate("/addaddress")}
          name=""
          id=""
          className="rounded-[20px] outline-none w-full py-10 "
        ></textarea>
        <p className="text-2xl ml-2 mb-2 mt-20 font-semibold capitalize text-secondary-color">
          {translate("special request", language)}
        </p>
        <div className="px-2">
          <textarea
            onChange={changeInput}
            name="SpecialRequest"
            id=""
            className="rounded-[20px] w-full py-10 outline-none placeholder:text-main-color placeholder:text-center "
          ></textarea>
        </div>
        <div className="my-12">
          <Button
            handle={handleSubmitForm}
            title={translate("next", language)}
          />
        </div>
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
      <div className="mb-8">
        <Footer />
      </div>
    </div>
  );
}

export default Delivery;
