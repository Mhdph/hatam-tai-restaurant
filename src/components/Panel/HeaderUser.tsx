import React from "react";

function HeaderUser() {
  return (
    <div className="flex items-center">
      <img
        alt="profile-pic"
        src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
        className="w-8 h-8 rounded-md"
      />
      <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
        Jane Doe
      </p>
    </div>
  );
}

export default HeaderUser;
