import React from "react";
import {
  TagIcon,
  CakeIcon,
  ArrowTrendingUpIcon,
  FolderPlusIcon,
} from "@heroicons/react/20/solid";
import PanelTab from "./PanelTab";
import { logo } from "../../assets";

function PanelSideBar() {
  return (
    <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
      <div className="h-16 w-full flex items-center my-12 p-8">
        <img src={logo} alt="logo" />
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
        <PanelTab
          Icon={ArrowTrendingUpIcon}
          name="last indoor order"
          address="/panel/lastindoororder"
        />
        <PanelTab
          Icon={FolderPlusIcon}
          name="additional"
          address="/panel/additonal"
        />
      </ul>
    </div>
  );
}

export default PanelSideBar;
