import React from "react";
import { useNavigate } from "react-router-dom";
import MyPageContainer from "../containers/MyPageContainer";

const MyPage = () => {
  const username = "piecekongju";
  const navigate = useNavigate();

  // 각 버튼 클릭 시 동작
  const handleUpload = () => {
    navigate("/upload");
  };

  const handleViewUploads = () => {
    navigate("/uploadlist");
  };

  const handleViewPurchases = () => {
    navigate("/purchaselist");
  };

  const handleEditInfo = () => {
    navigate("/userinfochange");
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <MyPageContainer
          username={username}
          onUpload={handleUpload}
          onViewUploads={handleViewUploads}
          onViewPurchases={handleViewPurchases}
          onEditInfo={handleEditInfo}
        />
      </main>
    </div>
  );
};

export default MyPage;
