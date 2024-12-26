import React from "react"; 

const categories = [ 
  "건축물", "가정용품", "교육자료", "부품 및 기계", "예술작품", "패션", "장난감", "기타" 
]; 

const CategoryMenu = () => { 
  return (
    <div className="w-[880px] p-6 bg-white border-t-[1.5px] border-b-[1.5px] border-blue-900"> 
      <div className="grid grid-cols-4 gap-8"> 
        {categories.map((category, index) => ( 
          <button 
            key={index} 
            className="flex items-center justify-center h-[104px] bg-gray-200 rounded-[20px] 
            text-[17px] text-black border-t-[1px] border-b-[1px] border-gray-400" 
            > 
            {category} 
          </button> 
        ))} 
      </div> 
    </div> 
 ); 
}; export default CategoryMenu; 
