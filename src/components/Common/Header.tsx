import clsx from "clsx";
import React from "react";
import { Logo } from "../../assets";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const language = localStorage.getItem("language");
  return (
    <div className="flex my-1 md:px-8 justify-between px-6 items-center">
      <p
        className={clsx(
          language === "EN" ? "font-roboto text-4xl" : "font-iran text-4xl",
          "font-bold capitalize text-main-color"
        )}
      >
        {title}
      </p>
      <img src={Logo} alt="" />
    </div>
  );
}

export default Header;
