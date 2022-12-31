import React from "react";

interface Input {
  changeText?: () => void;
  placeText: string;
}

function Input({ changeText, placeText }: Input) {
  return (
    <div className="w-full px-2">
      <input
        className="input_default w-full py-4 outline-none placeholder:capitalize px-3"
        type="text"
        placeholder={placeText}
        onChange={changeText}
      />
    </div>
  );
}

export default Input;
