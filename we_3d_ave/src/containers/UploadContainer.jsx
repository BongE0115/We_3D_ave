import React, { useState } from "react";
import UploadButton from "../components/UploadButton";
import InputField from "../components/user/InputField";

const UploadContainer = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFile = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    };
    fileInput.click();
  };

  const handleDeleteFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    console.log("업로드:", { files, title, price, description });
  };

  const handleCancel = () => {
    setFiles([]);
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-12 p-8">
      {/* 파일 업로드 섹션 */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <UploadButton onClick={handleAddFile} />
        {files.map((file, index) => (
          <div
            key={index}
            className="relative w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg"
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`preview-${index}`}
              className="object-cover w-full h-full rounded-lg"
            />
            <button
              onClick={() => handleDeleteFile(index)}
              className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1"
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      {/* 입력 필드 */}
      <InputField label="제목" placeholder="제목을 입력해주세요." value={title} onChange={setTitle} />
      <InputField label="가격" placeholder="가격을 입력해주세요." value={price} onChange={setPrice} />
      <InputField
        label="설명"
        placeholder="설명을 입력해주세요."
        value={description}
        onChange={setDescription}
        isTextArea
      />

      {/* 버튼 */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleCancel}
          className="w-32 h-12 bg-white border border-black rounded-lg text-lg font-bold hover:bg-gray-100"
        >
          취소
        </button>
        <button
          onClick={handleUpload}
          className="w-32 h-12 bg-black text-white rounded-lg text-lg font-bold hover:bg-gray-800"
        >
          업로드
        </button>
      </div>
    </div>
  );
};

export default UploadContainer;
