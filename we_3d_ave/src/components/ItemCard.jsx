// ItemCard.jsx - 컴포넌트
import React from "react";

const ItemCard = ({ image, title, date }) => {
  return (
    <div className="border rounded shadow-sm p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};

export default ItemCard;
