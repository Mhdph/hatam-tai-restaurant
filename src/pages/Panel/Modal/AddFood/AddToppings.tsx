import { PlusIcon } from "@heroicons/react/24/outline";
import { Input, Typography } from "@material-tailwind/react";
import React from "react";

function AddToppings({ items, setItems }: any) {
  const [Price, setPrice] = React.useState("");
  const [artoppingName, setArToppingName] = React.useState("");
  const [enToppingName, setEnToppingName] = React.useState("");
  const handleAddButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTopping = {
      en: {
        price: Price,
        enname: enToppingName,
      },
      ar: {
        price: Price,
        arname: artoppingName,
      },
    };

    const newToppins = [...items, newTopping];

    setItems(() => {
      return newToppins;
    });
    newToppins.map((item) => {
      console.log(item.en.enname);
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <Typography variant="h5">Toppings</Typography>
        <button
          onClick={handleAddButtonClick}
          className="bg-green-500 font-normal py-1 px-2 text-white rounded-lg capitalize"
        >
          <div className="flex items-center gap-1">
            <PlusIcon className="w-4 h-4" />
            add topping
          </div>
        </button>
      </div>

      <div className="flex items-center gap-2 mb-1">
        <Input
          label="EnName"
          onChange={(e) => setEnToppingName(e.target.value)}
        />
        <Input
          label="ArName"
          onChange={(e) => setArToppingName(e.target.value)}
        />
      </div>
      <Input label="Price" onChange={(e) => setPrice(e.target.value)} />
      <div className="mt-1">
        {items.map((item: any) => (
          <div key={item.price} className="flex justify-between">
            <div>{item.en.enname}</div>
            <div>{item.ar.arname}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddToppings;
