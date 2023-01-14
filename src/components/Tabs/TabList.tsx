import React from "react";
import { OfficeLogo, ApparmantLogo, HouseLogo } from "../../assets";
import { translate } from "../../i18n";
import TabListName from "./TabListName";

interface TabListProps {
  openTab: number;
  setOpenTab: ({ number }: any) => void;
}

function TabList({ openTab, setOpenTab }: TabListProps) {
  const language = localStorage.getItem("language");

  return (
    <ul className="flex mb-0 px-3 list-none  pt-3 pb-4" role="tablist">
      <TabListName
        ImageLogo={ApparmantLogo}
        TabName={translate("Apartment", language)}
        TabNumber={1}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        ImageLogo={HouseLogo}
        TabName={translate("House", language)}
        TabNumber={2}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
      <TabListName
        ImageLogo={OfficeLogo}
        TabName={translate("Office", language)}
        TabNumber={3}
        setOpenTab={setOpenTab}
        openTab={openTab}
      />
    </ul>
  );
}

export default TabList;
