import React from "react";
import { Link } from "react-router-dom";

function Button({ title, addres, handle }: any) {
  return (
    <Link onClick={handle} to={addres}>
      <div className="button_complate text-center text-white py-2.5 cursor-pointer font-bold text-2xl uppercase bottom-0">
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default Button;
