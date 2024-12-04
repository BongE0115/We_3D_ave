// pages/FindIdPage.jsx
import React from "react";
import FindIdContainer from "../containers/FindIdContainer";

// "아이디 찾기" 페이지
const FindIdPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <FindIdContainer />
      </div>
    </div>
  );
};

export default FindIdPage;
