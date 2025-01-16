import React from "react";

const InputField = ({ label, placeholder, value, onChange, isTextArea = false }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-light text-black mb-2">{label}</label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-32 p-4 bg-gray-200 border border-black rounded-lg text-lg placeholder-gray-400"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-12 p-4 bg-gray-200 border border-black rounded-lg text-lg placeholder-gray-400"
        />
      )}
    </div>
  );
};

export default InputField;
