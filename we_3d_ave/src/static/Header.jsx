import React from "react"; 
import { Link } from "react-router-dom"; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Header = () => { 
  // 경고창 함수 
  const handleAlert = () => { 
    alert("로그인이 필요합니다."); 
  }; 

  return ( 
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md"> 
      {/* 로고 */} 
      <div className="flex items-center space-x-2"> 
        <img src="/logo.png" alt="3D Weave Logo" className="h-8" /> 
        <span className="text-lg font-bold text-blue-700">3D Weave</span> 
      </div> 
      {/* 검색바 */} 
      <div className="relative w-full sm:w-2/3 max-w-lg"> 
        <input 
          type="text" 
          placeholder="검색어를 입력하세요." 
          className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none bg-gray-100" 
          /> 
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"> 
            <i className="fas fa-search text-gray-500 mr-2"></i> {/* 돋보기 아이콘 */} 
          </button> 
      </div> 
      {/* 로그인 전 메뉴 */} 
      {/* 장바구니, 마이페이지 클릭 시 경고창 */} 
      <div className="flex items-center space-x-4 text-sm text-gray-700"> 
        <button 
          onClick={handleAlert} 
          className="hover:text-blue-700 font-bold"> 
          장바구니 
        </button> 
        <button 
          onClick={handleAlert} 
          className="hover:text-blue-700 font-bold"> 
          마이페이지 
        </button> 
        <Link to="/" className="hover:text-blue-700 font-bold"> 
          로그인 
        </Link> 
      </div>  {/* 로그인 후 메뉴 */} 
 {/* <div className="flex items-center space-x-4 text-sm text-gray-700"> 
 <Link to="/cart" className="hover:text-blue-700 font-bold"> 
 장바구니 
 </Link> 
 <Link to="/mypage" className="hover:text-blue-700 font-bold"> 
 마이페이지 
 </Link> 
 <Link to="/" className="hover:text-blue-700 font-bold"> 
 로그인 
 </Link> 
 </div> */} 
      </header> 
  ); 
}; 
export default Header; 