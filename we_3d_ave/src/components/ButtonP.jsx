// Button.jsx: 버튼 컴포넌트
import React from "react";

// 버튼 컴포넌트
const Button = ({ text, onClick, variant = "default" }) => {
  // 버튼 스타일 지정
  const buttonStyle =
    variant === "primary"
      ? "bg-gray-300 text-black border border-black hover:bg-gray-400"
      : "bg-gray-200 text-black border border-gray-400 hover:bg-gray-300";

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-3 text-lg ${buttonStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;
