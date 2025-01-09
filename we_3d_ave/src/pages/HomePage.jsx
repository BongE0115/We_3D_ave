import React from "react"; 
import CategoryMenu from "../components/mainpage/CategoryMenu"; 
import ItemList from "../containers/ItemList"; 
import LoginForm from "../components/mainpage/LoginForm"; 

const HomePage = () => { 
  return ( 
    <div className="min-h-screen p-4"> 
      {/* 카테고리 메뉴와 로그인 폼 */} 
      <div class="flex justify-center mb-12 pt-12 space-x-24"> 
        <CategoryMenu /> 
        <LoginForm /> 
      </div> 
      {/* 아이템 목록 */} 
      <div> 
        <ItemList /> 
      </div> 
      {/* 페이징 처리 */} 
      <div className="flex justify-center mt-8"> 
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">{"<"}</button> 
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">1</button> 
        <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">2</button>  <button className="p-2 mx-2 bg-gray-100 rounded shadow-sm">{">"}</button> 
      </div> 
    </div> 
  ); 
}; 
export default HomePage; 