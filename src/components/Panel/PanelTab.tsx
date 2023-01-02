import React from "react";
import { Link, NavLink } from "react-router-dom";

export interface PanelTabProps {
  address: string;
  name: string;
  Icon: React.FC<any>;
}

function PanelTab({ address, name, Icon }: PanelTabProps) {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-indigo-700"
            : "hover:text-indigo-700 text-gray-600 focus:text-indigo-700 "
        }
        to={address}
      >
        <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal mt-4 mb-4 py-2 focus:outline-none">
          <div className="flex items-center">
            <Icon className="w-6 h-6" />
            <span className="ml-2 capitalize">{name}</span>
          </div>
        </li>
      </NavLink>
    </div>
  );
}

export default PanelTab;
