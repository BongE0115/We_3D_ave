import React from "react";
import ProductDetailsComponent from "../components/ProductDetail";

const ProductDetailContainer = () => {
  const product = {
    name: "연필꽂이",
    mainImage: "/images/pencil_holder.png",
    images: [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      "/path/to/image3.jpg",
      "/path/to/image4.jpg",
      "/path/to/image5.jpg",
    ],
    price: 2000,
    author: "권설",
    date: "2024.09.30",
    description: "칸이 3개 있는 연필꽂이입니다.",
  };

  return <ProductDetailsComponent product={product} />;
};

export default ProductDetailContainer;
