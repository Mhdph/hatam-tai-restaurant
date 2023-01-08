import { PaperClipIcon, XMarkIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import React from "react";
import { baseUrl } from "../../../config";

function AddFood({ showModal, setShowModal }: any) {
  const fileRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [message, setMessage] = React.useState<any>({
    name: "",
    price: "",
  });
  const [file, setFile] = React.useState("");
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
                <div className="items-center text-gray-500 flex">
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="inputIcon"
                  >
                    <PaperClipIcon className="h-6 w-6 text-gray-500" />
                    <input
                      type="file"
                      hidden
                      ref={fileRef}
                      onChange={addImageToPost}
                    />
                  </div>
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
                    onChange={changeInput}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    type="button"
                    onClick={handleSubmit}
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

export default AddFood;
