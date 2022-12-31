import React from "react";
import TabDetails from "./TabDetails";
import TabList from "./TabList";

export interface DataProps {
  data: object;
  setData: any;
}

export const Tabs = ({ data, setData }: DataProps) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <TabList openTab={openTab} setOpenTab={setOpenTab} />
          <TabDetails data={data} setData={setData} openTab={openTab} />
        </div>
      </div>
    </>
  );
};
