import React from "react";

const MyPageButton = ({ text, onClick }) => {
  return (
    <button
      className="w-full h-24 bg-blue-800 text-white text-xl font-medium rounded-lg mb-6 hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyPageButton;
