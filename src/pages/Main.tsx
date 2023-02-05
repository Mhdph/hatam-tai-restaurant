import clsx from "clsx";
import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ArKashi, Kashi } from "../assets";
import logo from "../assets/circle logo.png";
import Arrowback from "../components/Common/Arrowback";
import Bucket from "../components/Common/Bucket";
import Footer from "../components/Common/Footer";
import Loading from "../components/Coustom/Loading";
import Additional from "../components/Food/Additional";
import Food from "../components/Food/Food";
import { getAllFoodFn, getAllOneAdditionalFn } from "../config";
import { translate } from "../i18n";
import { FoodD } from "../types";

function Main() {
  const quantity = useSelector((state: any) => state.cartReducer.quantity);
  const { id } = useParams();
  const { isLoading, data, error } = useQuery("get all food", async () => {
    return await getAllFoodFn(id);
  });
  const {
    isLoading: AdditionalLoading,
    data: AdditionalData,
    error: AdditionalEroor,
  } = useQuery("get all additonal", async () => {
    return await getAllOneAdditionalFn(id);
  });
  if (isLoading) return <Loading />;
  if (AdditionalLoading) return <Loading />;
  const language = localStorage.getItem("language");

  return (
    <div>
      <div className="mr-5">
        <Arrowback />
      </div>
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-iran"
        )}
      >
        <div className="flex justify-between px-6 md:px-8 items-center">
          <p
            className={clsx(
              language === "EN" ? "text-3xl" : "text-[40px]",
              "font-bold capitalize  text-main-color"
            )}
          >
            {translate(id, language)}
          </p>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col h-screen overflow-scroll ">
          {data.map((product: FoodD) => (
            <Food product={product} />
          ))}
          {AdditionalData.length > 0 ? (
            <p
              className={clsx(
                language === "EN"
                  ? "font-roboto text-4xl ml-6"
                  : "font-iran text-4xl mr-6",
                "font-bold capitalize mt-6 text-main-color"
              )}
            >
              {translate("additional", language)}
            </p>
          ) : null}
          {AdditionalData.map((additional: FoodD) => (
            <Additional product={additional} />
          ))}
        </div>
        <img
          src={language === "EN" ? Kashi : ArKashi}
          className={clsx(
            language === "EN" ? "right-16" : "right-2",
            "-z-10 absolute  -bottom-20"
          )}
          alt=""
        />
        {quantity > 0 ? <Bucket /> : null}
      </div>
      <div className="mt-40">
        <Footer fixed />
      </div>
    </div>
  );
}

export default Main;
