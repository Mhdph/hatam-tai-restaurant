import { PlusIcon } from "@heroicons/react/24/outline";
import { Input, Typography } from "@material-tailwind/react";
import React from "react";

function AddToppings({ items, setItems }: any) {
  const [portNumber, setPortNumber] = React.useState("");
  const [toppingName, setToppingName] = React.useState("");
  const [enToppingName, setEnToppingName] = React.useState("");
  const handleAddButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newPort = {
      enname: {
        port: portNumber,
        enname: enToppingName,
      },
      arname: {
        port: portNumber,
        arname: toppingName,
      },
    };

    const newPorts = [...items, newPort];

    setItems(() => {
      return newPorts;
    });
    console.log(newPorts);
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
      <div className="mt-1">
        {items.map((item: any) => (
          <div key={item.port} className="flex justify-between">
            <div>{item.port}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mb-1">
        <Input
          label="EnName"
          onChange={(e) => setToppingName(e.target.value)}
        />
        <Input
          label="FaName"
          onChange={(e) => setEnToppingName(e.target.value)}
        />
      </div>
      <Input label="Price" onChange={(e) => setPortNumber(e.target.value)} />
    </div>
  );
}

export default AddToppings;
