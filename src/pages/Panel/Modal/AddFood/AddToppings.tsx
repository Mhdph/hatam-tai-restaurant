import { PlusIcon } from "@heroicons/react/24/outline";
import { Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { baseUrl } from "../../../../config";

function AddToppings({ message }: any) {
  const [price, setPrice] = React.useState("");
  const [artoppingName, setArToppingName] = React.useState("");
  const [enToppingName, setEnToppingName] = React.useState("");
  const queryClient = useQueryClient();
  // const handleAddButtonClick = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const newTopping = {
  //     en: {
  //       price: Price,
  //       enname: enToppingName,
  //     },
  //     ar: {
  //       price: Price,
  //       arname: artoppingName,
  //     },
  //   };

  //   const newToppins = [...items, newTopping];

  //   setItems(() => {
  //     return newToppins;
  //   });
  //   newToppins.map((item) => {
  //     console.log(item.en.enname);
  //   });
  // };

  const handleAddButtonClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/topping/`, {
        name: {
          en: artoppingName,
          ar: enToppingName,
        },
        price: price,
        food: message.enName,
      });
      toast.success("Topping Created successfully", {
        autoClose: 2000,
      });
      queryClient.invalidateQueries("category");
    } catch (err) {
      toast.error("Something is wrong");
    }
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
    </div>
  );
}

export default AddToppings;
