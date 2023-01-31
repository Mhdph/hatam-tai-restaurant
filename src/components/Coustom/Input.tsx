import React from "react";

interface Input {
  changeText?: (event: any) => void;
  placeText: string;
  name?: string;
}

function Input({ changeText, placeText, name }: Input) {
  return (
    <div className="w-full px-2">
      <input
        className="input_default w-full py-4 outline-none placeholder:capitalize px-3 text-main-color font-bold"
        type="text"
        placeholder={placeText}
        onChange={changeText}
        name={name}
      />
    </div>
  );
}

export default Input;
