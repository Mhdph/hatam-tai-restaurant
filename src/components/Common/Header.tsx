import React from "react";
import { Logo } from "../../assets";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="flex my-6 md:px-8 justify-between px-6 items-center">
      <p className="font-bold text-xl  capitalize text-main-color">{title}</p>
      <img src={Logo} alt="" />
    </div>
  );
}

export default Header;
