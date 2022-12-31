import React from "react";
import Apartmant from "./Apartmant";
import House from "./House";
import Office from "./Office";

interface TabDetailsProps {
  openTab: number;
  data: object;
  setData: any;
}

function TabDetails({ openTab, setData, data }: TabDetailsProps) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full rounded">
      <div className="py-5 flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <Apartmant data={data} setData={setData} />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <House data={data} setData={setData} />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <Office data={data} setData={setData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabDetails;
