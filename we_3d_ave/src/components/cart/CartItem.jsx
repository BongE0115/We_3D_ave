import React from "react";

const CartItem = ({ item, onRemove, onPurchase, onSelect }) => {
  return (
    <div className="flex items-center border-b-[2px] border-gray-300 py-4">
      {/* 선택 체크박스 */}
      <div className="w-1/12 text-center">
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => onSelect(item.id)}
          className="form-checkbox"
        />
      </div>

      {/* 상품 정보 */}
      <div className="w-6/12 flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div>
          <p className="font-bold text-lg">{item.name}</p>
        </div>
      </div>

      {/* 상품 금액 */}
      <div className="w-2/12 text-right">
        <p className="text-gray-800 font-semibold">
          {item.price > 0 ? `${item.price}원` : "무료"}
        </p>
      </div>

      {/* 선택 버튼 */}
      <div className="w-3/12 flex justify-center gap-4">
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => onPurchase(item.id)}
        >
          바로구매
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded-lg"
          onClick={() => onRemove(item.id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default CartItem;
