import React from "react";

const UploadButton = ({ onClick }) => {
  return (
    <div
      className="w-40 h-40 border-2 border-blue-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50"
      onClick={onClick}
    >
      <span className="text-blue-800 text-6xl font-bold">+</span>
    </div>
  );
};

export default UploadButton;
