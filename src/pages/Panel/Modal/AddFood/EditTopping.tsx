import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../../../config";

function AddCategory({ open, setOpen }: any) {
  const handleOpen = () => setOpen(!open);
  const [name, setName] = useState("");
  const [arname, setArName] = useState("");
  const [price, setPrice] = useState("");

  const CreateCategoryFn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/category/`, {
        name: {
          en: name,
          ar: arname,
        },
        price,
      });
      toast.success("Category Created successfully", {
        autoClose: 2000,
      });
      setOpen(false);
    } catch (err) {
      setOpen(false);
      toast.error("Something is wrong");
    }
  };

  return (
    // <Fragment>
    //   <Button
    //     className="mb-2"
    //     onClick={handleOpen}
    //     variant="filled"
    //     color="green"
    //   >
    //     Toppings
    //   </Button>
    //   <Dialog open={open} size="sm" handler={handleOpen}>
    //     <DialogHeader>Edit Topping</DialogHeader>
    //     <DialogBody divider>
    //       <div className="mb-3">
    //         <Input
    //           label="Category Name"
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //       <Input
    //         label="Category Arabic Name"
    //         onChange={(e) => setArName(e.target.value)}
    //       />
    //       <Input
    //         label="Category Arabic Name"
    //         onChange={(e) => setPrice(e.target.value)}
    //       />
    //     </DialogBody>
    //     <DialogFooter>
    //       <Button
    //         variant="text"
    //         color="red"
    //         onClick={handleOpen}
    //         className="mr-1"
    //       >
    //         <span>Cancel</span>
    //       </Button>
    //       <Button variant="gradient" color="green" onClick={CreateCategoryFn}>
    //         <span>Add</span>
    //       </Button>
    //     </DialogFooter>
    //   </Dialog>
    // </Fragment>
    <div className="px-20 mt-4">
      <div className="flex items-center gap-1 mb-4">
        <Input
          label="Category Arabic Name"
          onChange={(e) => setArName(e.target.value)}
        />
        <Input
          label="ArName"
          name="arName"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Input
        label="Price"
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button className="mt-1" variant="gradient" color="green">
        <span>Add</span>
      </Button>
    </div>
  );
}

export default AddCategory;
