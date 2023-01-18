import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/Coustom/Loading";
import { baseUrl, getOneFoodFn } from "../../../../config";
import AddPhoto from "./AddPhoto";
import AddToppings from "./AddToppings";
import SelectFood from "./SelectFood";

function EditFood() {
  const [items, setItems] = useState<any>([]);
  const [userId, setUserId] = React.useState("");
  const [file, setFile] = React.useState<any>("");
  const [data, setData] = React.useState<any>([]);
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getOneFoodFn = async () => {
      try {
        const response = await axios.get(`${baseUrl}/food/${id}`);
        setData(response.data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    getOneFoodFn();
  }, [id]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newPost: any = {
      name: {
        en: message.enName,
        ar: message.arName,
      },
      price: message.price,
      category: userId,
      desc: {
        en: message.enDesc,
        ar: message.arDesc,
      },
      toppings: items,
    };
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    if (file) {
      newPost.image = filename;
      try {
        await axios.post(`${baseUrl}/upload`, data);
      } catch (err) {}
    }
    try {
      await axios.put(`${baseUrl}/food/${id}`, newPost);
    } catch (err) {
      console.log(err);
    }
  };

  const changeInput = (e: any) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = React.useState<any>({
    arName: "",
    enName: "",
    price: "",
    category: "",
    enDesc: "",
    arDesc: "",
  });
  if (loading) return <p>loading...</p>;
  return (
    <div className="px-20 mt-4">
      <AddPhoto file={file} setFile={setFile} />
      {data.name.ar}
      <div className="flex items-center gap-1 mb-4">
        <Input
          label="EnName"
          name="enName"
          onChange={changeInput}
          defaultValue={data.name.ar}
        />
        <Input label="ArName" name="arName" onChange={changeInput} />
      </div>
      <Input label="Price" name="price" onChange={changeInput} />
      <div className="flex items-center gap-1 mt-4">
        <Input label="EnDescription" name="enDesc" onChange={changeInput} />
        <Input label="ArDescription" name="arDesc" onChange={changeInput} />
      </div>
      <SelectFood setUserId={setUserId} name="category" />
      <AddToppings setItems={setItems} items={items} />
      <Button
        className="mt-1"
        variant="gradient"
        color="green"
        onClick={handleSubmit}
      >
        <span>Add</span>
      </Button>
    </div>
  );
}

export default EditFood;
