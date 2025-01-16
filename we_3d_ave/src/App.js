// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'; 
import Header from "./static/Header";
import Footer from "./static/Footer";
import HomePage from "./pages/HomePage";
import FindIdPage from "./pages/user/FindIdPage";
import FindPasswordPage from "./pages/user/FindPasswordPage"
import SignUpPage from "./pages/user/SignUpPage"
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import UploadPage from "./pages/UploadPage";
import UserInfoChangePage from './pages/UserInfoChangePage'
import UploadListPage from "./pages/UploadListPage";
import PurchaseListPage from "./pages/PurchaseListPage";
import ProductDetailsPage from "./pages/ProductDetailPage";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
    
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      {/* 아이디찾기 페이지 */}
      <Route path="/findId" element={<FindIdPage />} />

      {/* 비번찾기 페이지 */}
      <Route path="/findPw" element={<FindPasswordPage />} />

      {/* 회원가입 페이지 */}
      <Route path="/signUp" element={<SignUpPage />} />

      {/* 장바구니 페이지 */}
      <Route path="/cart" element={<CartPage />} />

      {/* 마이 페이지 */}
      <Route path="/myPage" element={<MyPage />} />

      {/* 업로드 페이지 */}
      <Route path="/upload" element={<UploadPage />} />

      {/* 회원정보 변경 페이지 */}
      <Route path="/userinfochange" element={<UserInfoChangePage />} />

      {/* 업로드 목록 페이지 */}
      <Route path="/uploadlist" element={<UploadListPage />} />

      {/* 구매 목록 페이지 */}
      <Route path="/purchaselist" element={<PurchaseListPage />} />

      {/* 제품상세 페이지 */}
      <Route path="/productdetail" element={<ProductDetailsPage />} />

      {/* 기본 경로 처리 */}
      <Route path="/" element={<HomePage />} />
    </Routes>
      

    
  );
};

export default App;
