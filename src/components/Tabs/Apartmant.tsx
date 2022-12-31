import React from "react";
import Input from "../Input";

function Apartmant() {
  return (
    <div className="flex flex-col gap-3">
      <Input placeText="street" />
      <Input placeText="building" />
      <Input placeText="floor" />
      <Input placeText="apartment no." />
      <Input placeText="additional directions (optional)" />
    </div>
  );
}

export default Apartmant;
