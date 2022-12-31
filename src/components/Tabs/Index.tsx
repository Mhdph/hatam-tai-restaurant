import React from "react";
import TabDetails from "./TabDetails";

import TabList from "./TabList";

export const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <TabList openTab={openTab} setOpenTab={setOpenTab} />
          <TabDetails openTab={openTab} />
        </div>
      </div>
    </>
  );
};
