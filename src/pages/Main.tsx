import React, { useState } from "react";
import logo from "../assets/circle logo.png";
import ommlet from "../assets/ommlet.png";
import Footer from "../components/Footer";
import Kashi from "../assets/kashi.png";
import Arrowback from "../components/Arrowback";
import Bucket from "../components/Bucket";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllFoodFn } from "../config";
import { FoodD } from "../types";
import { useDispatch, useSelector } from "react-redux";
import Food from "../components/Food";

function Main() {
  const [first, setfirst] = React.useState(false);
  const { id } = useParams();
  const { isLoading, data, error } = useQuery(
    "query-tutorial-by-id",
    async () => {
      return await getAllFoodFn(id);
    }
  );

  if (isLoading) return <p>Loading</p>;
  console.log(data);

  // const cartItems = useSelector((state: any) => state.cartReducer.value);

  // const [totalProducts, setTotalProducts] = useState(0);

  // const [totalPrice, setTotalPrice] = useState(0);

  // React.useEffect(() => {
  //   setTotalPrice(
  //     cartItems.reduce(
  //       (total: number, item: FoodD) =>
  //         total + Number(item.quantity) * Number(item.price),
  //       0
  //     )
  //   );
  //   setTotalProducts(
  //     cartItems.reduce(
  //       (total: number, item: FoodD) => total + Number(item.quantity),
  //       0
  //     )
  //   );
  // }, [cartItems]);

  // console.log(totalProducts);
  // console.log(totalPrice);
  // console.log(cartItems);

  return (
    <div className={`${first ? "blur-xs" : ""} h-full font-roboto`}>
      <Arrowback />
      <div className="flex mb-6 justify-between px-3 md:px-8 items-center">
        <p className="font-bold text-3xl capitalize  text-main-color">{id}</p>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        {data.map((product: FoodD) => (
          <Food product={product} />
        ))}
      </div>
      <img src={Kashi} className="-z-10 absolute bottom-20" alt="" />
      <Bucket />
      <Footer />
    </div>
  );
}

export default Main;
