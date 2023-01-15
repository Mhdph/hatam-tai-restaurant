import React from "react";

function AddPhoto({ file, setFile }: any) {
  const fileRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [fileName, setFileName] = React.useState<any>("");
  const addImageToPost = (event: any) => {
    if (event.target.files != null) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    }
  };
  return (
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
  );
}

export default AddPhoto;
