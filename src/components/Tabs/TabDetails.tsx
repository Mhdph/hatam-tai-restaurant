import React from "react";
import Apartmant from "./Apartmant";
import House from "./House";
import Office from "./Office";

interface TabDetailsProps {
  openTab: number;
}

function TabDetails({ openTab }: TabDetailsProps) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full rounded">
      <div className="py-5 flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <Apartmant />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <House />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <Office />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabDetails;
