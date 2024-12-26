import React from "react"; 
import ItemCard from "../components/ItemCard";  

const mockItems = [ 
  { image: "/images/item1.png", title: "도장", date: "2024.09.30" }, 
  { image: "/images/item2.png", title: "서랍", date: "2024.09.30" }, 
  { image: "/images/item3.png", title: "연필꽂이", date: "2024.09.30" }, 
  { image: "/images/item4.png", title: "파인애플", date: "2024.09.30" }, 
]; 

const ItemList = () => { 
  return ( 
    <div class="flex justify-center mb-12 pt-12 space-x-8"> {/* 카드 간 간격을 조정 */} 
      {mockItems.map((item, index) => ( 
        <div className="w-80"> 
          <ItemCard key={index} {...item} /> 
        </div> 
      ))} 
    </div> 
  ); 
}; 
export default ItemList; 