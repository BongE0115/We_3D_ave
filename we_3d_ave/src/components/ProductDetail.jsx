import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* 제목 */}
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

      {/* 이미지와 상세 이미지 */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/3">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sub ${index}`}
              className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="border-t border-gray-300 pt-4 mb-6">
        <p className="text-lg">
          <span className="font-bold">가격:</span>{" "}
          {product.price > 0
            ? `${product.price.toLocaleString()}원`
            : "무료"}
        </p>
        <p className="text-lg">
          <span className="font-bold">작성자:</span> {product.author}
        </p>
        <p className="text-lg">
          <span className="font-bold">날짜:</span> {product.date}
        </p>
      </div>

      {/* 설명 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">설명</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* 버튼 */}
      <div className="flex gap-4">
        <button className="px-6 py-2 border rounded-lg">
          쇼핑 계속하기
        </button>
        <button className="px-6 py-2 border rounded-lg">
          장바구니 담기
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-lg">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
