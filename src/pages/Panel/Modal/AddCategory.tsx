import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useQuery, useQueryClient } from "react-query";
import { baseUrl, getAllCategoryFn } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";

function AddCategory({ open, setOpen }: any) {
  const handleOpen = () => setOpen(!open);

  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategoryFn,
  });
  const CreateCategoryFn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/category/`, {
        name: name,
      });
      toast.success("Category Created successfully", {
        autoClose: 2000,
      });
      queryClient.invalidateQueries("category");
      setOpen(false);
    } catch (err) {
      setOpen(false);
      toast.error("Something is wrong");
    }
  };

  return (
    <Fragment>
      <Button
        className="mb-2"
        onClick={handleOpen}
        variant="filled"
        color="green"
      >
        Add Category
      </Button>
      <Dialog open={open} size="sm" handler={handleOpen}>
        <DialogHeader>Add new category</DialogHeader>
        <DialogBody divider>
          <Input
            label="Category Name"
            onChange={(e) => setName(e.target.value)}
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
          <Button variant="gradient" color="green" onClick={CreateCategoryFn}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default AddCategory;
