import React from "react";

const PurchaseItem = ({ item, onSelect, selected }) => {
  return (
    <div className="flex items-center border-b border-gray-300 py-4">
      {/* 체크박스 */}
      <div className="w-10 flex justify-center">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(item.id)}
          className="w-5 h-5"
        />
      </div>

      {/* 이미지 */}
      <div className="w-24 h-24 flex justify-center items-center">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* 상품명 */}
      <div className="flex-1 pl-4 text-left">
        <p className="text-lg font-medium">{item.name}</p>
      </div>

      {/* 금액 */}
      <div className="w-32 text-center">
        <p>{item.price > 0 ? `${item.price.toLocaleString()}원` : "무료"}</p>
      </div>

      {/* 다운로드 버튼 */}
      <div className="w-32 text-center">
        <button className="px-4 py-2 bg-gray-300 border rounded-lg text-sm">
          다운로드
        </button>
      </div>
    </div>
  );
};

export default PurchaseItem;
