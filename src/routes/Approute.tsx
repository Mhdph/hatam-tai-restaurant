import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Coustom/Loading";
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
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";

export const DashboardRoutes = [
  { path: "/lastorder", component: <LastOrder /> },
  { path: "/panelcategory", component: <PanelCategory /> },
  { path: "/food", component: <Food /> },
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
        <Route path="/panel/*" element={<Panel />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
