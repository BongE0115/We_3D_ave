// components/Button.js
import React from "react";

const Button = ({ label, onClick, primary = false, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-12 px-4 text-lg font-bold rounded-lg ${
        primary
          ? "bg-black text-white"
          : "bg-gray-200 text-black border border-black"
      } disabled:opacity-50`}
    >
      {label}
    </button>
  );
};

export default Button;