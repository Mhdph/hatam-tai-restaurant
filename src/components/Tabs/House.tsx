import React from "react";
import { translate } from "../../i18n";
import Input from "../Coustom/Input";
import { DataProps } from "./Index";

function House({ data, setData }: DataProps) {
  const language = localStorage.getItem("language");

  const changeInput = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex h-full flex-col gap-3">
      <Input
        placeText={translate("street", language)}
        name="street"
        changeText={changeInput}
      />
      <Input
        placeText={translate("House", language)}
        name="house"
        changeText={changeInput}
      />
      <Input
        placeText={translate("additional directions (optional)", language)}
        name="additional"
        changeText={changeInput}
      />
    </div>
  );
}

export default House;
