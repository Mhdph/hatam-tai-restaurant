import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PanelSvg from "../../assets/svg/PanelSvg";
import PanelMobile from "../../components/Panel/PanelMobile";
import PanelNavbar from "../../components/Panel/PanelNavbar";
import PanelSideBar from "../../components/Panel/PanelSideBar";
import { DashboardRoutes } from "../../routes/Approute";
import ProtectedRoute from "../../routes/ProtectedRoute";
import Complate from "../Complate";
import LastOrder from "./LastOrder";

function Panel() {
  const [show, setShow] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex flex-no-wrap">
        {/* Sidebar starts */}
        <PanelSideBar />
        {/*Mobile responsive sidebar*/}
        <PanelMobile show={show} setShow={setShow} />
        {/*Mobile responsive sidebar*/}
        {/* Sidebar ends */}
        <div className="w-full">
          {/* Navigation starts */}
          <PanelNavbar
            show={show}
            setShow={setShow}
            profile={profile}
            setProfile={setProfile}
          />
          {/* Navigation ends */}
          {/* Remove class [ h-64 ] when adding a card block */}

          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route index element={<LastOrder />} />
              {DashboardRoutes.map((route: any) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Panel;
