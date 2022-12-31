import React from "react";
import { Link } from "react-router-dom";

export interface PanelTabProps {
  address: string;
  name: string;
  Icon: React.FC<any>;
}

function PanelTab({ address, name, Icon }: PanelTabProps) {
  return (
    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
      <div className="flex items-center">
        <Icon className="w-6 h-6" />
        <Link to={address}>
          <span className="ml-2 capitalize">{name}</span>
        </Link>
      </div>
    </li>
  );
}

export default PanelTab;
