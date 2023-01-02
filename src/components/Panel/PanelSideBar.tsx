import React from "react";
import PanelSvg from "../../assets/svg/PanelSvg";
import {
  TagIcon,
  CakeIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import PanelTab from "./PanelTab";

function PanelSideBar() {
  return (
    <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
      <div className="h-16 w-full flex items-center px-8">
        <PanelSvg />
      </div>
      <ul className=" py-6">
        <PanelTab
          Icon={TagIcon}
          name="category"
          address="/panel/panelcategory"
        />
        <PanelTab Icon={CakeIcon} name="food" address="/panel/food" />
        <PanelTab
          Icon={ArrowTrendingUpIcon}
          name="last order"
          address="/panel/lastorder"
        />
      </ul>
    </div>
  );
}

export default PanelSideBar;
