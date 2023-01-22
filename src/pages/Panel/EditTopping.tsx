import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Coustom/Loading";
import { baseUrl, deleteToppingFn, getToppingFn } from "../../config";

function EditTopping() {
  const { name } = useParams();
  const [price, setPrice] = React.useState("");
  const [artoppingName, setArToppingName] = React.useState("");
  const [enToppingName, setEnToppingName] = React.useState("");
  const { isLoading, data, error } = useQuery("get all toppings", async () => {
    return await getToppingFn(name);
  });

  const { mutate: deleteToppping } = useMutation(
    (Id: string) => deleteToppingFn(Id),
    {
      onSuccess(data) {
        toast.success("Topping deleted successfully");
      },
      onError: (error: any) => {
        toast.error(`Something went wrong: ${error.response.data.message}`);
      },
    }
  );
  const onDeleteHandler = (Id: any) => {
    deleteToppping(Id);
  };
  const queryClient = useQueryClient();

  const handleAddButtonClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/topping/`, {
        name: {
          en: artoppingName,
          ar: enToppingName,
        },
        price: price,
        food: name,
      });
      toast.success("Topping Created successfully", {
        autoClose: 2000,
      });
      queryClient.invalidateQueries("get all toppings");
    } catch (err) {
      toast.error("Something is wrong");
    }
  };

  const UpdateButtonClick = async (id: string, e: any) => {
    try {
      await axios.put(`${baseUrl}/topping/${id}`, {
        name: {
          en: enToppingName,
          ar: artoppingName,
        },
        price: price,
        food: name,
      });
      toast.success("Topping Updated successfully", {
        autoClose: 2000,
      });
      queryClient.invalidateQueries("get all toppings");
    } catch (err) {
      toast.error("Something is wrong");
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className="flex gap-3 flex-col px-4 mt-4">
      {data.map((item: any) => (
        <div className="flex gap-3 items-center justify-between">
          <Input
            defaultValue={item.name.en}
            onChange={(e) => setEnToppingName(e.target.value)}
          />
          <Input
            defaultValue={item.name.ar}
            onChange={(e) => setArToppingName(e.target.value)}
          />
          <Input
            defaultValue={item.price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button
            color="blue"
            onClick={(e) => UpdateButtonClick(item._id, e.preventDefault())}
          >
            Update
          </Button>
          <Button onClick={() => onDeleteHandler(item._id)} color="red">
            Delete
          </Button>
        </div>
      ))}
      <hr className=" border-opacity-30 border-[0.1px] my-4 border-gray-800" />

      <Input
        placeholder="En name"
        onChange={(e) => setEnToppingName(e.target.value)}
      />
      <Input
        placeholder="Ar name"
        onChange={(e) => setArToppingName(e.target.value)}
      />
      <Input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <Button onClick={handleAddButtonClick} color="green">
        Add new Topping
      </Button>
    </div>
  );
}

export default EditTopping;
