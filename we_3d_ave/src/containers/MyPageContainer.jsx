import React from "react";
import MyPageButton from "../components/MyPageButton";

const MyPageContainer = ({ username, onUpload, onViewUploads, onViewPurchases, onEditInfo }) => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto mt-12 p-8 border-2 border-blue-800 rounded-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-light tracking-wider mb-4">
          AVE, <span className="font-normal">{username}님</span>
        </h1>
      </div>
      <div>
        <MyPageButton text="업로드" onClick={onUpload} />
        <MyPageButton text="업로드 목록" onClick={onViewUploads} />
        <MyPageButton text="구매목록" onClick={onViewPurchases} />
        <MyPageButton text="회원정보 변경" onClick={onEditInfo} />
      </div>
    </div>
  );
};

export default MyPageContainer;
