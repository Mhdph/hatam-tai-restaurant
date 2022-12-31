import React from "react";
import { PanelTabProps } from "./PanelTab";

function PanelMobileTab({ address, name, Icon }: PanelTabProps) {
  return (
    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
      <div className="flex items-center">
        <Icon className="h-6 w-6" />
        <a href={address}>
          <span className="ml-2 capitalize">{name}</span>
        </a>
      </div>
    </li>
  );
}

export default PanelMobileTab;
