import React, { useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "파인애플",
      price: 0,
      image: "/images/pineapple.png",
      selected: false,
    },
    {
      id: 2,
      name: "서랍",
      price: 2000,
      image: "/images/drawer.png",
      selected: true,
    },
  ]);

  // 전체 선택/해제
  const handleSelectAll = () => {
    const isAllSelected = cartItems.every((item) => item.selected);
    setCartItems(cartItems.map((item) => ({ ...item, selected: !isAllSelected })));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handlePurchase = (id) => {
    console.log(`바로 구매: ${id}`);
  };

  const handleSelect = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const totalItems = cartItems.filter((item) => item.selected).length;
  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>

      {/* 상품 헤더 */}
      <div className="border-b-[4px] border-t-[4px] border-black p-4 flex items-center">
        <div className="w-1/12 text-center">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={cartItems.every((item) => item.selected)}
          />
        </div>
        <div className="w-6/12 text-left font-bold">상품</div>
        <div className="w-2/12 text-right font-bold">금액</div>
        <div className="w-3/12 text-center font-bold">선택</div>
      </div>

      {/* 상품 리스트 */}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={handleRemove}
          onPurchase={handlePurchase}
          onSelect={handleSelect}
        />
      ))}

      {/* 선택 삭제 */}
      <div className="text-right mt-4">
        <button className="text-blue-500 font-bold" onClick={() => setCartItems([])}>
          선택 삭제
        </button>
      </div>

      {/* 총 주문 금액 요약 */}
      <CartSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
        onPurchaseAll={() => console.log("전체 구매")}
      />
    </div>
  );
};

export default CartContainer;
