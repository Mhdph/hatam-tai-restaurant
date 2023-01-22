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
import React, { Fragment } from "react";
import Loading from "../../../../components/Coustom/Loading";
import { baseUrl } from "../../../../config";
import AddPhoto from "./AddPhoto";
import SelectFood from "./SelectFood";

function AddFood({ open, setOpen }: any) {
  const handleOpen = () => setOpen(!open);
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
  const [limitToppings, setLimitTopping] = React.useState("0");
  const [topping, setTopping] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

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
      limitTopping: limitToppings,
      topping: topping,
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
          <Input
            label="Enter topping limit"
            onChange={(e) => setLimitTopping(e.target.value)}
          />
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
