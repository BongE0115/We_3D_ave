// components/InputField.jsx
import React from "react";

// 입력 필드 컴포넌트
const InputField = ({ label, placeholder, type = "text", onChange, value }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
