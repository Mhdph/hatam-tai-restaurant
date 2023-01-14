import React from "react";
import { translate } from "../../i18n";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface AddressButtonProps {
  submitForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const language = localStorage.getItem("language");
function AddressButton({ submitForm }: AddressButtonProps) {
  return (
    <div className="flex justify-between px-12 font-semibold text-secondary-color text-base  my-6">
      <button className="address_button capitalize px-2 py-2">
        {translate("view map", language)}
      </button>
      <button
        onClick={submitForm}
        className="address_button capitalize px-2 py-2"
      >
        <div className="flex items-center">
          {translate("save address", language)}
          <MapPinIcon className="h-5 mx-1 w-5 text-secondary-color opacity-70" />
        </div>
      </button>
    </div>
  );
}

export default AddressButton;
