import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="
        spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
          text-yellow-500
        "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
