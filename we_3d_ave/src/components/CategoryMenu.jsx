// CategoryMenu.jsx - 컴포넌트
import React from "react";

const categories = [
  { name: "건축물", position: { left: "145.58px", top: "63.37px" } },
  { name: "가정용품", position: { left: "350.08px", top: "63.37px" } },
  { name: "교육자료", position: { left: "559.69px", top: "62.43px" } },
  { name: "부품 및 기계", position: { left: "784.38px", top: "53.79px" } },
  { name: "예술작품", position: { left: "135.46px", top: "190.15px" } },
  { name: "패션", position: { left: "366.25px", top: "190.15px" } },
  { name: "장난감", position: { left: "570.82px", top: "190.15px" } },
  { name: "기타", position: { left: "796.5px", top: "189.21px" } },
];

const CategoryMenu = () => {
  return (
    <div
      className="relative flex flex-col items-start border-t border-b border-solid"
      style={{
        width: "880px",
        height: "270px",
        left: "75px",
        top: "181px",
        padding: "19px 39px",
        gap: "10px",
        background: "#FFFFFF",
        borderColor: "#0C0776",
        backdropFilter: "blur(2px)",
        boxSizing: "border-box",
      }}
    >
      {/* 개별 카테고리 버튼 */}
      {categories.map((category, index) => (
        <button
          key={index}
          className="absolute flex items-center justify-center text-black text-sm"
          style={{
            width: "176.51px",
            height: "104.28px",
            left: category.position.left,
            top: category.position.top,
            background: "#ECECEC",
            borderRadius: "20px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "21px",
            textAlign: "center",
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
