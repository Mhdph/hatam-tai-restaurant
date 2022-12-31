import React from "react";
import Input from "../Input";
import { DataProps } from "./Index";

function Apartmant({ data, setData }: DataProps) {
  const changeInput = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex flex-col gap-3">
      <Input placeText="street" name="street" changeText={changeInput} />
      <Input placeText="building" name="building" changeText={changeInput} />
      <Input placeText="floor" name="floor" changeText={changeInput} />
      <Input
        placeText="apartment no."
        name="apartment"
        changeText={changeInput}
      />
      <Input
        placeText="additional directions (optional)"
        name="additional"
        changeText={changeInput}
      />
    </div>
  );
}

export default Apartmant;