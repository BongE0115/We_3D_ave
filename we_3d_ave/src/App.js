// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'; 
import Header from "./static/Header";
import Footer from "./static/Footer";
import HomePage from "./pages/HomePage";
import FindIdPage from "./pages/FindIdPage";

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

      {/* 기본 경로 처리 */}
      <Route path="/" element={<HomePage />} />
    </Routes>
      

    
  );
};

export default App;
