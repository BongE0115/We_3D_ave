// InputField.jsx: 입력 필드 컴포넌트
import React from "react";

// 입력 필드 컴포넌트
const InputField = ({ label, placeholder, type = "text", onChange, value }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="text-lg font-medium mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded-lg px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

export default InputField;
