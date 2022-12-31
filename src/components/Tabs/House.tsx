import React from "react";
import Input from "../Input";

function House() {
  return (
    <div className="flex flex-col gap-3">
      <Input placeText="street" />
      <Input placeText="house" />
      <Input placeText="additional directions (optional)" />
    </div>
  );
}

export default House;
