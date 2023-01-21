import React from "react";
import { Link } from "react-router-dom";

function Button({ title, addres, handle }: any) {
  return (
    <Link to={addres}>
      <button
        onClick={handle}
        className="button_complate font-bernardo w-full text-center text-white py-2.5 cursor-pointer font-bold text-2xl uppercase"
      >
        <p className="font-bernardo">{title}</p>
      </button>
    </Link>
  );
}

export default Button;
