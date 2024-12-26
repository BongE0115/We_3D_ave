// components/Button.jsx
import React from "react";

// 버튼 컴포넌트
const Button = ({ text, onClick, variant = "default" }) => {
  const buttonStyle =
    variant === "primary"
      ? "bg-blue-500 text-white"
      : "bg-gray-300 text-black";

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 mt-2 ${buttonStyle} hover:opacity-90`}
    >
      {text}
    </button>
  );
};

export default Button;