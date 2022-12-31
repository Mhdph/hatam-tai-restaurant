import React from "react";
import PanelSvg from "../../assets/svg/PanelSvg";
import {
  ArrowTrendingUpIcon,
  CakeIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import PanelMobileTab from "./PanelMobileTab";
import HeaderUser from "./HeaderUser";
function PanelMobile({ show, setShow }: any) {
  return (
    <div
      className={
        show
          ? "w-full h-full absolute z-40  transform  translate-x-0 "
          : "   w-full h-full absolute z-40  transform -translate-x-full"
      }
      id="mobile-nav"
    >
      <div
        className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
        onClick={() => setShow(!show)}
      />
      <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <div className="flex items-center justify-between px-8">
              <div className="h-16 w-full flex items-center">
                <PanelSvg />
              </div>
              <div
                id="closeSideBar"
                className="flex items-center justify-center h-10 w-10"
                onClick={() => setShow(!show)}
              >
                <XMarkIcon className="h-6 w-6" />
              </div>
            </div>
            <ul className=" py-6">
              <PanelMobileTab
                Icon={TagIcon}
                name="category"
                address="/panel/panelcategory"
              />
              <PanelMobileTab
                Icon={CakeIcon}
                name="food"
                address="/panel/food"
              />
              <PanelMobileTab
                Icon={ArrowTrendingUpIcon}
                name="last order"
                address="/panel/lastorder"
              />
            </ul>
          </div>
          <HeaderUser />
        </div>
      </div>
    </div>
  );
}

export default PanelMobile;
