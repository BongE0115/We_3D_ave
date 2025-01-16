import React from "react";

const UploadItem = ({ item, onSelect, selected }) => {
  return (
    <div className="flex items-center border-b border-gray-300 py-4">
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(item.id)}
        className="mr-4"
      />
      
      {/* 이미지 */}
      <div className="w-24 h-24 flex justify-center items-center">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* 상품명 */}
      <div className="flex-1 pl-4">
        <p className="text-lg font-medium">{item.name}</p>
      </div>

      {/* 금액 */}
      <div className="w-32 text-center">
        <p>{item.price > 0 ? `${item.price.toLocaleString()}원` : "무료"}</p>
      </div>

      {/* 구매자수 */}
      <div className="w-20 text-center">
        <p>{item.buyCount}</p>
      </div>
    </div>
  );
};

export default UploadItem;
