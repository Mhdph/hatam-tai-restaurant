import React from "react";

interface AddressButtonProps {
  submitForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function AddressButton({ submitForm }: AddressButtonProps) {
  return (
    <div className="flex justify-between px-12 font-semibold text-secondary-color text-base  my-6">
      <button className="address_button capitalize px-6 py-2">view map</button>
      <button
        onClick={submitForm}
        className="address_button capitalize px-6 py-2"
      >
        save address
      </button>
    </div>
  );
}

export default AddressButton;
