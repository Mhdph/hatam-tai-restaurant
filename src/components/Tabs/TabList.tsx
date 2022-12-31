import React from "react";
import { OfficeLogo, ApparmantLogo, HouseLogo } from "../../assets";
import TabListName from "./TabListName";

interface TabListProps {
  openTab: number;
  setOpenTab: ({ number }: any) => void;
}

function TabList({ openTab, setOpenTab }: TabListProps) {
  return (
    <ul
      className="flex mb-0 px-3 list-none flex-wrap pt-3 pb-4 flex-row"
      role="tablist"
    >
      <TabListName
        ImageLogo={ApparmantLogo}
        TabName="Apartment"
        TabNumber={1}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        ImageLogo={HouseLogo}
        TabName="House"
        TabNumber={2}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        ImageLogo={OfficeLogo}
        TabName="Office"
        TabNumber={3}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
    </ul>
  );
}

export default TabList;
