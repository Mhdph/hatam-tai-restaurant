import React from "react";
import { Kashi } from "../assets";
import Apartmant from "../components/Tabs/Apartmant";
import Arrowback from "../components/Common/Arrowback";
import Header from "../components/Common/Header";
import Input from "../components/Coustom/Input";
import { Tabs } from "../components/Tabs/Index";
import { useDispatch } from "react-redux";
import { AddressSlice } from "../app/addressSlice";
import AddressButton from "../components/Coustom/AddressButton";
import { translate } from "../i18n";
import clsx from "clsx";

function AddNewAddres() {
  const dispatch = useDispatch();
  const language = localStorage.getItem("language");
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    distruct: "",
    street: "",
    building: "",
    floor: "",
    office: "",
    additional: "",
    house: "",
    apartment: "",
  });

  const handleSubmitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(AddressSlice.actions.saveAddress(data));
    console.log("hello");
  };

  const changeInput = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="h-full">
      <Arrowback />
      <Header title={translate("Add New Address", language)} />
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-bernardo",
          ""
        )}
      >
        <div className="flex flex-col gap-3 px-4">
          <Input
            placeText={translate("First Name", language)}
            name="firstname"
            changeText={changeInput}
          />
          <Input
            placeText={translate("last name", language)}
            name="lastname"
            changeText={changeInput}
          />
          <p className="text-sm ml-2 font-semibold text-main-color capitalize">
            {translate("address details", language)}
          </p>
          <Input placeText={translate("abu dhabi", language)} />
          <Input
            placeText={translate("district", language)}
            name="distruct"
            changeText={changeInput}
          />
          <Tabs setData={setData} data={data} />
        </div>
        <AddressButton submitForm={handleSubmitForm} />
        <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
      </div>
    </div>
  );
}

export default AddNewAddres;
