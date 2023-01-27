import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { arrow } from "../../assets";

function Arrowback() {
  const navigate = useNavigate();
  const language = localStorage.getItem("language");
  return (
    <img
      onClick={() => navigate(-1)}
      src={arrow}
      alt="arroback"
      className={clsx(
        language === "EN" ? "ml-6" : "ml-6",
        "h-5 arrow_direction w-5 mt-12 md:ml-8 cursor-pointer"
      )}
    />
  );
}

export default Arrowback;
