import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Kashi } from "../assets";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import { NumberSlice } from "../app/addNumberSlice";

function Delivery() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    phoneNumber: "",
    SpecialRequest: "",
  });
  const navigate = useNavigate();

  const handleSubmitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(NumberSlice.actions.saveInfo(data));
  };

  const changeInput = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="font-roboto">
      <Arrowback />
      <Header title="Delivery" />
      <div className="px-4">
        <p className="text-base ml-2 mb-2 font-semibold capitalize text-[#4E3C11]  ">
          phone number
        </p>
        <div className="px-2">
          <input
            name="phoneNumber"
            type="text"
            className="py-1.5 rounded-[20px] outline-none w-3/4 px-3"
          />
        </div>
        <p className="text-base mt-4 mb-2 ml-2 font-semibold capitalize text-[#4E3C11] ">
          address
        </p>
        <textarea
          onClick={() => navigate("/addaddress")}
          name=""
          id=""
          className="rounded-[20px] outline-none w-full py-10 "
        ></textarea>
        <p className="text-2xl ml-2 mb-2 mt-20 font-semibold capitalize text-[#4E3C11] ">
          special request
        </p>
        <div className="px-2">
          <textarea
            onChange={changeInput}
            name=""
            id=""
            className="rounded-[20px] w-full py-10 outline-none placeholder:text-main-color placeholder:text-center "
            // placeholder="if you have a food allergy or a request for driver"
          ></textarea>
        </div>
        <div className="my-12">
          <Button title="next" addres="/payment" />
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
