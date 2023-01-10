import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useQuery, useQueryClient } from "react-query";
import { baseUrl, getAllCategoryFn } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import { PlusIcon } from "@heroicons/react/20/solid";

function AddFood({ open, setOpen }: any) {
  const handleOpen = () => setOpen(!open);

  const fileRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [message, setMessage] = React.useState<any>({
    name: "",
    price: "",
  });
  const [file, setFile] = React.useState("");
  const [portNumber, setPortNumber] = useState("");
  const [toppingName, setToppingName] = useState("");

  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [fileName, setFileName] = React.useState<any>("");
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("message", message);
      try {
        setLoading(true);
        const res = await axios.post(`${baseUrl}/food`, formData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };

  const changeInput = (e: any) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const addImageToPost = (event: any) => {
    if (event.target.files != null) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
      console.log(file);
    }
  };

  const handleAddButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newPort = {
      port: portNumber,
      name: toppingName,
    };
    const newPorts = [...items, newPort];

    setItems(() => {
      return newPorts;
    });
    console.log(newPorts);
  };

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
          <div className=" flex h-auto w-full flex-col pb-4 items-center justify-center">
            {file && (
              <p className="mb-2 flex items-center text-xs text-gray-500">
                {fileName}
              </p>
            )}

            <div
              onClick={() => fileRef.current?.click()}
              className="relative h-32 w-4/5 max-w-xs rounded-lg bg-gray-100 shadow-inner"
            >
              <input
                ref={fileRef}
                onChange={addImageToPost}
                type="file"
                id="file-upload"
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="z-20 flex h-full w-full cursor-pointer flex-col-reverse items-center justify-center"
              >
                <p className="z-10 text-center text-xs font-light text-gray-500">
                  click to upload image
                </p>
                <svg
                  className="z-10 h-8 w-8 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                </svg>
              </label>
            </div>
          </div>
          <Input label="Name" onChange={(e) => setMessage(e.target.value)} />
          <Input label="Price" onChange={(e) => setMessage(e.target.value)} />
          <Input
            label="Description"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Select label="Select Category">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
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
          <div className="flex items-center gap-2">
            <Input
              label="Name"
              onChange={(e) => setPortNumber(e.target.value)}
            />
            <Input
              label="Price"
              onChange={(e) => setToppingName(e.target.value)}
            />
          </div>
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
