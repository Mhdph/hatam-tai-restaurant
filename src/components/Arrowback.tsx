import React from "react";
import { useNavigate } from "react-router-dom";
import { arrow } from "../assets";

function Arrowback() {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate(-1)}
      src={arrow}
      alt="arroback"
      className="h-5 w-5 mt-16 md:ml-8 cursor-pointer ml-3"
    />
  );
}

export default Arrowback;
