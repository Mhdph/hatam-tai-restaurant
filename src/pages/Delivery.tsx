import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArKashi, Kashi } from "../assets";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Coustom/Button";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import React from "react";
import { NumberSlice } from "../app/addNumberSlice";
import { translate } from "../i18n";
import clsx from "clsx";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

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
  const address = useSelector((state: any) => state.user);

  return (
    <div className="mt-2 md:h-screen">
      <Arrowback />
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-iran"
        )}
      >
        <Header title={translate("Delivery", language)} />
      </div>
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-iran",
          "px-4"
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
        {address.firstname !== "" ? (
          <div className="flex items-center mt-6">
            <p
              className={clsx(
                language === "EN"
                  ? "font-roboto font-semibold ml-2 text-base"
                  : "font-bernardo text-xl",
                "text-secondary-color  "
              )}
            >
              {address?.firstname} {address?.lastname},{address?.distruct},
              {address?.street},
              {address?.building && translate("building", language)}
              {address?.building},
              {address?.floor && translate("floor", language)}
              {address?.floor},{address?.house && translate("House", language)}{" "}
              {address?.house},{translate("apartment no.", language)}{" "}
              {address?.apartment},
              {address?.additional &&
                translate("additional directions (optional)", language)}
              {address?.additional}
              <PencilSquareIcon
                onClick={() => navigate("/addaddress")}
                className="h-6 w-6"
              />
            </p>
          </div>
        ) : (
          <textarea
            onClick={() => navigate("/addaddress")}
            name=""
            id=""
            className="rounded-[20px] outline-none w-full py-10 "
          ></textarea>
        )}

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
      <img
        src={language === "EN" ? Kashi : ArKashi}
        className={clsx(
          language === "EN" ? "right-16" : "right-2",
          "-z-10 absolute  -bottom-20 md:-bottom-0 md:top-44"
        )}
        alt=""
      />{" "}
      <div className="mb-8">
        <Footer />
      </div>
    </div>
  );
}

export default Delivery;
