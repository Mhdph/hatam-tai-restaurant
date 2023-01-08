import React from "react";
import { Kashi } from "../assets";
import Apartmant from "../components/Tabs/Apartmant";
import Arrowback from "../components/Common/Arrowback";
import Header from "../components/Header";
import Input from "../components/Input";
import { Tabs } from "../components/Tabs/Index";
import { useDispatch } from "react-redux";
import { AddressSlice } from "../app/addressSlice";
import AddressButton from "../components/AddressButton";

function AddNewAddres() {
  const dispatch = useDispatch();
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
    <div className="h-full font-roboto">
      <Arrowback />
      <Header title="Add New Address" />
      <div className="flex flex-col gap-3 px-4">
        <Input
          placeText="First Name"
          name="firstname"
          changeText={changeInput}
        />
        <Input placeText="last name" name="lastname" changeText={changeInput} />
        <p className="text-sm font-semibold text-main-color capitalize">
          address details
        </p>
        <Input placeText="abu dhabi" />
        <Input placeText="district" name="distruct" changeText={changeInput} />
        <Tabs setData={setData} data={data} />
      </div>
      <AddressButton submitForm={handleSubmitForm} />
      <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
    </div>
  );
}

export default AddNewAddres;
