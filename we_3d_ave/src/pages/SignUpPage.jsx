// SignUpPage.jsx: 회원가입 페이지
import React from "react";
import SignUpContainer from "../containers/SignUpContainer";

// 회원가입 페이지
const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* 컨테이너와 레이아웃 설정 */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <SignUpContainer />
        
      </div>
    </div>
  );
};

export default SignUpPage;
