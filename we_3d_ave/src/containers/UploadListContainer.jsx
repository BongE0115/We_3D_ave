import React, { useState } from "react";
import UploadItem from "../components/UploadItem";

const UploadListContainer = () => {
  const [uploads, setUploads] = useState([
    {
      id: 1,
      name: "파인애플",
      image: "/images/pineapple.png",
      price: 0,
      buyCount: 2,
      selected: false,
    },
    {
      id: 2,
      name: "선반",
      image: "/images/drawer.png",
      price: 2000,
      buyCount: 1,
      selected: false,
    },
  ]);

  const handleSelectAll = () => {
    const allSelected = uploads.every((item) => item.selected);
    setUploads(uploads.map((item) => ({ ...item, selected: !allSelected })));
  };

  const handleSelect = (id) => {
    setUploads(
      uploads.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteSelected = () => {
    setUploads(uploads.filter((item) => !item.selected));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">나의 업로드 목록</h1>
      <div className="flex items-center border-b-2 border-gray-400 pb-2 mb-4">
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={uploads.every((item) => item.selected)}
          className="mr-4"
        />
        <span className="flex-1 pl-4 font-bold text-center">상품</span>
        <span className="w-32 text-center font-bold">금액</span>
        <span className="w-20 text-center font-bold">구매자수</span>
      </div>
      {uploads.map((item) => (
        <UploadItem
          key={item.id}
          item={item}
          selected={item.selected}
          onSelect={handleSelect}
        />
      ))}
      <div className="mt-4">
        <button
          onClick={handleDeleteSelected}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          선택 삭제
        </button>
      </div>
    </div>
  );
};

export default UploadListContainer;
