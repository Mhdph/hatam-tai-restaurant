import { XMarkIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import React from "react";
import { baseUrl, getAllCategoryFn } from "../../../config";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "react-query";

function AddCategory({ showModal, setShowModal }: any) {
  const [name, setName] = React.useState("");
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategoryFn,
  });
  const ChangePasswordFn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/category/`, {
        name: name,
      });
      toast.success("Category Created successfully", {
        autoClose: 2000,
      });
      queryClient.invalidateQueries("category");
      setShowModal(false);
    } catch (err) {
      console.log(err);
      toast.error("Something is wrong");
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="w-full max-w-xs">
              <div className="mb-4 rounded-lg bg-white px-8 pt-6 pb-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <p className="flex items-center py-4 font-bold text-gray-800">
                    Add New Category{" "}
                  </p>
                  <XMarkIcon
                    onClick={() => setShowModal(false)}
                    className="h-5 w-5 cursor-pointer text-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    className="focus:shadow-outline w-full appearance-none bg-gray-100 rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                    id="password"
                    type="name"
                    placeholder="name category"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    type="button"
                    onClick={ChangePasswordFn}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddCategory;
