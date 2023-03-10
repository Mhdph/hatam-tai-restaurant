import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Radio,
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
  const [limitToppings, setLimitTopping] = React.useState("0");
  const [topping, setTopping] = React.useState(false);
  const [popUp, setpopUp] = React.useState(false);

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
      limitTopping: limitToppings,
      topping: topping,
      popUp,
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
      <div className="flex items-center gap-1 mb-4">
        <Input
          label="EnName"
          name="enName"
          onChange={changeInput}
          defaultValue={data.name.en}
        />
        <Input
          label="ArName"
          name="arName"
          onChange={changeInput}
          defaultValue={data.name.ar}
        />
      </div>
      <Input
        label="Price"
        name="price"
        onChange={changeInput}
        defaultValue={data.price}
      />
      <div className="flex items-center gap-1 mt-4">
        <Input
          label="EnDescription"
          name="enDesc"
          onChange={changeInput}
          defaultValue={data.desc.en}
        />
        <Input
          label="ArDescription"
          name="arDesc"
          onChange={changeInput}
          defaultValue={data.desc.ar}
        />
      </div>
      <SelectFood setUserId={setUserId} name="category" />
      <div className="flex justify-around">
        <div className="flex flex-col">
          <p>This food have topping?</p>
          <div className="flex gap-2">
            <Radio
              id="html"
              name="type"
              label="Yes"
              className="bg-transparent"
              onChange={(e) => setTopping(true)}
            />
            <Radio
              id="react"
              name="type"
              label="No"
              className="bg-transparent"
              onChange={(e) => setTopping(false)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p>This food have popUp?</p>
          <div className="flex gap-2">
            <Radio
              id="html"
              name="type"
              label="Yes"
              className="bg-transparent"
              onChange={(e) => setpopUp(true)}
            />
            <Radio
              id="react"
              name="type"
              label="No"
              className="bg-transparent"
              onChange={(e) => setpopUp(false)}
            />
          </div>
        </div>
      </div>
      <Input
        label="Enter topping limit"
        onChange={(e) => setLimitTopping(e.target.value)}
      />
      <Button
        className="mt-3 w-full"
        variant="gradient"
        color="green"
        onClick={handleSubmit}
      >
        <span>update</span>
      </Button>
    </div>
  );
}

export default EditFood;
