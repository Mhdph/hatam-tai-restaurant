import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../assets/circle logo.png";
import Kashi from "../assets/kashi.png";
import Arrowback from "../components/Common/Arrowback";
import Bucket from "../components/Common/Bucket";
import Footer from "../components/Common/Footer";
import Loading from "../components/Coustom/Loading";
import Food from "../components/Food/Food";
import { getAllFoodFn } from "../config";
import { FoodD } from "../types";

function Main() {
  const quantity = useSelector((state: any) => state.cartReducer.quantity);
  const { id } = useParams();
  const { isLoading, data, error } = useQuery("get all food", async () => {
    return await getAllFoodFn(id);
  });

  if (isLoading) return <Loading />;

  return (
    <div className="h-full font-roboto">
      <Arrowback />
      <div className="flex justify-between px-6 md:px-8 items-center">
        <p className="font-bold text-3xl capitalize  text-main-color">{id}</p>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        {data.map((product: FoodD) => (
          <Food product={product} />
        ))}
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
      {quantity > 0 ? <Bucket /> : null}
      <Footer />
    </div>
  );
}

export default Main;
