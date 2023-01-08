import React from "react";
import { whatsapp, instagram, hell, call } from "../assets";

function Footer({ fixed }: any) {
  return (
    <div
      className={`${
        fixed ? "fixed" : ""
      } w-full px-6   bottom-0 overflow-hidden`}
    >
      <div className="flex my-4 items-center justify-around  px-5 language_choose">
        <img src={whatsapp} alt="" />
        <img src={instagram} alt="" />
        <img src={hell} alt="" />
        <img src={call} alt="" />
      </div>
    </div>
  );
}

export default Footer;
