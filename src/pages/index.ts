import React from "react";
export const Main = React.lazy(() => import("./Main"));
export const Welcome = React.lazy(() => import("./Welcome"));
export const Category = React.lazy(() => import("./Category"));
export const OrderSummery = React.lazy(() => import("./OrderSummery"));
export const Delivery = React.lazy(() => import("./Delivery"));
export const Payment = React.lazy(() => import("./Payment"));
export const Complate = React.lazy(() => import("./Complate"));
export const AddNewAddres = React.lazy(() => import("./AddNewAddres"));
export const Login = React.lazy(() => import("./Login"));
export const Panel = React.lazy(() => import("./Panel"));
export const Food = React.lazy(() => import("./Panel/Food"));
export const LastOrder = React.lazy(() => import("./Panel/LastOrder"));
export const PanelCategory = React.lazy(() => import("./Panel/PanelCategory"));
export const EditFood = React.lazy(
  () => import("./Panel/Modal/AddFood/EditFood")
);
