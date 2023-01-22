import React from "react";
import { useSelector } from "react-redux";
import ToppingItems from "./ToppingItems";

function ToppingsSummery() {
  const toppingItems = useSelector((state: any) => state.topping.value);

  return (
    <div className="flex flex-col justify-center w-full gap-2">
      {toppingItems.map((item: any) => (
        <ToppingItems item={item} />
      ))}
    </div>
  );
}

export default ToppingsSummery;
