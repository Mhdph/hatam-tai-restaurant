import React from "react";

interface TabListNameProps {
  openTab: number;
  setOpenTab: ({ number }: any) => void;
  ImageLogo: string;
  TabNumber: number;
  TabName: string;
}

function TabListName({
  ImageLogo,
  openTab,
  setOpenTab,
  TabNumber,
  TabName,
}: TabListNameProps) {
  return (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
      <a
        className={
          "text-sm font-semibold capitalize text-main-color px-5 py-3 shadow-lg rounded block" +
          (openTab === TabNumber ? " card-food" : " input_default")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(TabNumber);
        }}
        data-toggle="tab"
        role="tablist"
      >
        <div className="flex items-center gap-1">
          <img className="h-6 w-6" src={ImageLogo} alt="officelogo" />
          <p>{TabName}</p>
        </div>
      </a>
    </li>
  );
}

export default TabListName;
