import React from "react";
import { Kashi } from "../assets";
import Apartmant from "../components/Tabs/Apartmant";
import Arrowback from "../components/Arrowback";
import Header from "../components/Header";
import Input from "../components/Input";
import { Tabs } from "../components/Tabs/Index";

function AddNewAddres() {
  return (
    <div className="h-full font-roboto">
      <Arrowback />
      <Header title="Add New Address" />
      <div className="flex flex-col gap-3 px-4">
        <Input placeText="First Name" />
        <Input placeText="last name" />
        <p className="text-sm font-semibold text-main-color capitalize">
          address details
        </p>
        <Input placeText="abu dhabi" />
        <Input placeText="district" />
        <Tabs />
      </div>
      <div className="flex justify-between px-12 font-semibold text-secondary-color text-base  my-6">
        <button className="address_button capitalize px-6 py-2">
          view map
        </button>
        <button className="address_button capitalize px-6 py-2">
          save address
        </button>
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
    </div>
  );
}

export default AddNewAddres;
