import React from "react";

// 각 카테고리별 이름과 이미지 경로를 포함한 배열
const categories = [
  { name: "건축물", image: "/images/architecture.png" },
  { name: "가정용품", image: "/images/home_goods.png" },
  { name: "교육자료", image: "/images/education.png" },
  { name: "부품 및 기계", image: "/images/parts_machines.png" },
  { name: "예술작품", image: "/images/artworks.png" },
  { name: "패션", image: "/images/fashion.png" },
  { name: "장난감", image: "/images/toys.png" },
  { name: "기타", image: "/images/others.png" },
];

const CategoryMenu = () => {
  return (
    <div className="w-[880px] p-6 bg-white border-t-[1.5px] border-b-[1.5px] border-blue-900">
      <div className="grid grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center h-[104px] bg-gray-200 rounded-[20px] 
            text-[17px] text-black border-t-[1px] border-b-[1px] border-gray-400"
          >
            {/* 이미지 표시 */}
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-10 h-10 mb-2" // 이미지 크기와 여백 설정
            />
            {/* 카테고리 이름 표시 */}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
