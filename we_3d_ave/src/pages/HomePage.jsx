// HomePage.jsx - 페이지
import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ItemList from "../containers/ItemList";
import LoginForm from "../components/LoginForm";


const HomePage = () => {
  return (
    <div className="min-h-screen p-4">

      {/* 카테고리 메뉴 */}
      <CategoryMenu />

      {/* 로그인 */}
      <LoginForm />

      {/* 아이템 목록 */}
      <ItemList />

      {/* 페이징 처리 */}
      <div className="flex justify-center mt-4">
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">{"<"}</button>
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">1</button>
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">2</button>
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">{">"}</button>
      </div>
    </div>
  );
};

export default HomePage;
