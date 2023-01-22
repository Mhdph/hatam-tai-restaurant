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
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { baseUrl, getAllCategoryFn } from "../../../config";

function EditCategory({ editopen, setEditOpen, handleEditOpen, id }: any) {
  const [name, setName] = useState("");
  const [arname, setArName] = useState("");
  const queryClient = useQueryClient();
  const refetch = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategoryFn,
  });
  const CreateCategoryFn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (arname === "") {
      try {
        await axios.put(`${baseUrl}/category/${id}`, {
          name: {
            en: name,
          },
        });
        toast.success("Category Updated successfully", {
          autoClose: 2000,
        });
        queryClient.invalidateQueries("category");
        setEditOpen(false);
        setArName("");
        setName("");
      } catch (err) {
        setEditOpen(false);
        toast.error("Something is wrong");
      }
    } else if (name === "") {
      try {
        await axios.put(`${baseUrl}/category/${id}`, {
          name: {
            ar: arname,
          },
        });
        toast.success("Category Updated successfully", {
          autoClose: 2000,
        });
        queryClient.invalidateQueries("category");
        setEditOpen(false);
        setArName("");
        setName("");
      } catch (err) {
        setEditOpen(false);
        toast.error("Something is wrong");
      }
    } else {
      try {
        await axios.put(`${baseUrl}/category/${id}`, {
          name: {
            en: name,
            ar: arname,
          },
        });
        toast.success("Category Updated successfully", {
          autoClose: 2000,
        });
        queryClient.invalidateQueries("category");
        setEditOpen(false);
        setArName("");
        setName("");
      } catch (err) {
        setEditOpen(false);
        toast.error("Something is wrong");
      }
    }
  };
  return (
    <Fragment>
      <Dialog open={editopen} size="sm" handler={handleEditOpen}>
        <DialogHeader>Edit category</DialogHeader>
        <DialogBody divider>
          <div className="mb-3">
            <Input
              label="Category Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Input
            label="Category Arabic Name"
            onChange={(e) => setArName(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleEditOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={CreateCategoryFn}>
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default React.memo(EditCategory);
