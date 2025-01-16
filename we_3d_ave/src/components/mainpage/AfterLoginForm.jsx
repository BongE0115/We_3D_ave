import React from "react";
import { Link } from 'react-router-dom';

const AfterLoginForm = ({ username, onLogout }) => {
  return (
    <div className="relative w-[379px] h-[270px] bg-white border-[1.5px] border-blue-900 rounded-[34px] p-4">
      {/* 사용자 이름 및 환영 메시지 */}
      <div className="absolute top-[69px] left-[50%] transform -translate-x-1/2 flex items-center items-baseline whitespace-nowrap">
        <span className="text-[30px] font-normal tracking-[0.3em]">
          AVE,
        </span>
        <span className="text-[18px] font-normal text-gray-700 tracking-[0.1em] ml-2">
          {username}님
        </span>
      </div>

      {/* 버튼 그룹 */}
      <div className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 flex justify-between gap-4">
        {/* 업로드 버튼 */}
        <div className="relative w-[97px] h-[76px] bg-blue-900 rounded-[5px]">
          <Link to="/upload" className="mr-1">
            <span className="absolute top-[26px] left-0 right-0 text-center text-white text-[18px] font-normal tracking-[0.1em]">
              업로드
            </span>
          </Link>
        </div>
        {/* 마이페이지 버튼 */}
        <div className="relative w-[97px] h-[76px] bg-blue-900 rounded-[5px]">
          <Link to="/myPage" className="mr-1"> 
            <span className="absolute top-[26px] left-0 right-0 text-center text-white text-[15px] font-normal tracking-[0.1em]">
              마이페이지
            </span>
          </Link>
        </div>
        {/* 로그아웃 버튼 */}
        <div
          onClick={onLogout}
          className="relative w-[97px] h-[76px] bg-blue-900 rounded-[5px] cursor-pointer"
        >
          <span className="absolute top-[26px] left-0 right-0 text-center text-white text-[18px] font-normal tracking-[0.1em]">
            로그아웃
          </span>
        </div>
      </div>
    </div>
  );
};

export default AfterLoginForm;
