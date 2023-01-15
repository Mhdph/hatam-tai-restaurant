import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import React, { Fragment, useState } from "react";
import Loading from "../../../../components/Coustom/Loading";
import { baseUrl } from "../../../../config";
import { FoodD } from "../../../../types";
import AddPhoto from "./AddPhoto";
import AddToppings from "./AddToppings";
import SelectFood from "./SelectFood";

function AddFood({ open, setOpen }: any) {
  const handleOpen = () => setOpen(!open);
  const [items, setItems] = useState<any>([]);
  const [userId, setUserId] = React.useState("");
  const [message, setMessage] = React.useState<any>({
    arName: "",
    enName: "",
    price: "",
    category: "",
    enDesc: "",
    arDesc: "",
  });
  const [file, setFile] = React.useState<any>("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const formData: any = new FormData();
    // formData.append("image", file);
    const newPost: any = {
      name: {
        en: message.arName,
        ar: message.enName,
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
    newPost.image = filename;
    try {
      await axios.post(`${baseUrl}/upload`, data);
    } catch (err) {}

    try {
      setLoading(true);
      await axios.post(`${baseUrl}/food`, newPost);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const changeInput = (e: any) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  if (loading) return <Loading />;

  return (
    <Fragment>
      <Button
        className="mb-2"
        onClick={handleOpen}
        variant="filled"
        color="green"
      >
        Add Food
      </Button>
      <Dialog
        className="h-screen overflow-y-scroll mt-5"
        open={open}
        size="sm"
        handler={handleOpen}
      >
        <DialogHeader>Add new food</DialogHeader>
        <DialogBody className="flex flex-col gap-2" divider>
          <AddPhoto file={file} setFile={setFile} />
          <div className="flex items-center gap-1">
            <Input label="EnName" name="enName" onChange={changeInput} />
            <Input label="ArName" name="arName" onChange={changeInput} />
          </div>
          <Input label="Price" name="price" onChange={changeInput} />
          <div className="flex items-center gap-1">
            <Input label="EnDescription" name="enDesc" onChange={changeInput} />
            <Input label="ArDescription" name="arDesc" onChange={changeInput} />
          </div>
          <SelectFood setUserId={setUserId} name="category" />
          <AddToppings setItems={setItems} items={items} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default AddFood;
