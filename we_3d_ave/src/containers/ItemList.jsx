// ItemList.jsx - 컨테이너
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
    <div className="grid grid-cols-4 gap-4">
      {mockItems.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
