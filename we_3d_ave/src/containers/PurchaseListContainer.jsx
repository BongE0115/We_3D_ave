import React, { useState } from "react";
import PurchaseItem from "../components/PurchaseItem";

const PurchaseListContainer = () => {
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      name: "파인애플",
      image: "/images/pineapple.png",
      price: 0,
      selected: false,
    },
    {
      id: 2,
      name: "선반",
      image: "/images/drawer.png",
      price: 2000,
      selected: false,
    },
  ]);

  const handleSelectAll = () => {
    const allSelected = purchases.every((item) => item.selected);
    setPurchases(purchases.map((item) => ({ ...item, selected: !allSelected })));
  };

  const handleSelect = (id) => {
    setPurchases(
      purchases.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteSelected = () => {
    setPurchases(purchases.filter((item) => !item.selected));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">나의 구매 목록</h1>
      <div className="flex items-center border-b-2 border-gray-400 pb-2 mb-4">
        <div className="w-10 flex justify-center">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={purchases.every((item) => item.selected)}
            className="w-5 h-5"
          />
        </div>
        <span className="flex-1 pl-4 font-bold text-left">상품</span>
        <span className="w-32 text-center font-bold">금액</span>
        <span className="w-32 text-center font-bold">다운로드</span>
      </div>
      {purchases.map((item) => (
        <PurchaseItem
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

export default PurchaseListContainer;
