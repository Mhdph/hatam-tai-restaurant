import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Coustom/Loading";
import MapSearch from "../components/Map/MapSearch";
import {
  Main,
  Category,
  Welcome,
  OrderSummery,
  Delivery,
  Payment,
  Complate,
  AddNewAddres,
  Login,
  Food,
  LastOrder,
  Panel,
  PanelCategory,
  EditFood,
} from "../pages";
import MapPage from "../pages/Map";
import Additional from "../pages/Panel/additional";
import EditAdditonal from "../pages/Panel/additional/EditAditional";
import EditTopping from "../pages/Panel/EditTopping";
import LastOrderIndoor from "../pages/Panel/LastOrderIndoor";

export const DashboardRoutes = [
  { path: "/lastorder", component: <LastOrder /> },
  { path: "/panelcategory", component: <PanelCategory /> },
  { path: "/food", component: <Food /> },
  { path: "/lastindoororder", component: <LastOrderIndoor /> },
  { path: "/food/:id", component: <EditFood /> },
  { path: "/additonal", component: <Additional /> },
  { path: "/additonal/:id", component: <EditAdditonal /> },
  { path: "/topping/:name", component: <EditTopping /> },
  ,
];

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/category" element={<Category />} />
        <Route path="/main/:id" element={<Main />} />
        <Route path="/ordersummery" element={<OrderSummery />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/complate" element={<Complate />} />
        <Route path="/addaddress" element={<AddNewAddres />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<MapSearch />} />
        <Route path="/panel/*" element={<Panel />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
