// FindPasswordPage.jsx: 비밀번호 찾기 페이지
import React from "react";
import FindPasswordContainer from "../../containers/FindPasswordContainer";

// 비밀번호 찾기 페이지
const FindPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* 컨테이너와 페이지 레이아웃 */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <FindPasswordContainer />
        
      </div>
    </div>
  );
};

export default FindPasswordPage;
