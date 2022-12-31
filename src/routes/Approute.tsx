import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
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
} from "../pages";

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
