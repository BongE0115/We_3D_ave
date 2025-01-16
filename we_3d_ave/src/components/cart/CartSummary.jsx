import React from "react";

const CartSummary = ({ totalItems, totalPrice, onPurchaseAll }) => {
  return (
    <div className="w-full border-t-[4px] border-black mt-8 pt-6">
      <h2 className="text-2xl font-bold mb-4">총 주문 금액</h2>

      {/* 금액 정보 섹션 */}
      <div className="grid grid-cols-4 gap-4 text-lg font-medium">
        <div></div>
        {/* 구분선 */}
        <div className="border-r-[2px] border-gray-400"></div>
        {/* 항목 목록 */}
        <div className="text-left space-y-4">
          <p>주문 상품 수</p>
          <p>주문 금액</p>
          <p>할인 금액</p>
          <p>배송비</p>
          <p className="text-xl font-bold">최종 결제 금액</p>
        </div>



        {/* 금액 값 */}
        <div className="text-right space-y-4">
          <p>{totalItems}개</p>
          <p>{totalPrice.toLocaleString()}원</p>
          <p className="text-red-500">-0원</p>
          <p>0원</p>
          <p className="text-xl font-bold text-red-500">
            {totalPrice.toLocaleString()}원
          </p>
        </div>
      </div>

      {/* 구매 버튼 */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className="border border-black rounded-lg px-6 py-2 text-lg font-bold"
          onClick={() => console.log("쇼핑 계속하기")}
        >
          쇼핑 계속하기
        </button>
        <button
          className="border border-black rounded-lg px-6 py-2 text-lg font-bold"
          onClick={() => console.log("선택 상품 구매")}
        >
          선택 상품 구매
        </button>
        <button
          className="bg-black text-white rounded-lg px-6 py-2 text-lg font-bold"
          onClick={onPurchaseAll}
        >
          전체 상품 구매
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
