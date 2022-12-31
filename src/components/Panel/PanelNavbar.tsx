import React from "react";
import {
  UserIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";
import HeaderProfile from "./HeaderProfile";

function PanelNavbar({ show, setShow, profile, setProfile }: any) {
  return (
    <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
      <HeaderProfile profile={profile} setProfile={setProfile} />
      <div
        className="text-gray-600 mr-8 visible lg:hidden relative"
        onClick={() => setShow(!show)}
      >
        {show ? " " : <Bars3Icon className="h-6 w-6 cursor-pointer" />}
      </div>
    </nav>
  );
}

export default PanelNavbar;
