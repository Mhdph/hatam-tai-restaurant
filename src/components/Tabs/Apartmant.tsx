import React from "react";
import { translate } from "../../i18n";
import Input from "../Coustom/Input";
import { DataProps } from "./Index";

function Apartmant({ data, setData }: DataProps) {
  const language = localStorage.getItem("language");

  const changeInput = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex flex-col gap-3">
      <Input
        placeText={translate("street", language)}
        name="street"
        changeText={changeInput}
      />
      <Input
        placeText={translate("building", language)}
        name="building"
        changeText={changeInput}
      />
      <Input
        placeText={translate("floor", language)}
        name="floor"
        changeText={changeInput}
      />
      <Input
        placeText={translate("apartment no.", language)}
        name="apartment"
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

export default Apartmant;
