import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import AfterLoginForm from "./AfterLoginForm";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = "piecekongju"; // 사용자 이름

  return (
    <div className="flex items-center justify-center">
      {!isLoggedIn ? (
        // 로그인 전 화면
        <div className="w-[379px] h-[270px] bg-white border-[1.5px] border-blue-900 rounded-[34px] p-4">
          <h2 className="text-[30px] font-normal leading-[36px] tracking-[0.3em] text-black mt-4 mb-4 pl-4">
            로그인
            <i className="fas fa-lock"></i>
          </h2>
          <div className="flex justify-center pt-4 mb-4">
            {/* 아이디와 비밀번호 입력 폼 */}
            <div className="flex flex-col space-y-2">
              {/* 아이디 입력 */}
              <div className="w-[188px] h-[30px] bg-gray-200 rounded-[5px] flex items-center pl-2">
                <input
                  type="text"
                  placeholder="아이디"
                  className="text-[15px] text-opacity-70 font-normal bg-gray-200 leading-[18px]"
                />
              </div>
              {/* 비밀번호 입력 */}
              <div className="w-[188px] h-[30px] bg-gray-200 rounded-[5px] flex items-center pl-2">
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="text-[15px] text-opacity-70 font-normal bg-gray-200 leading-[18px]"
                />
              </div>
            </div>
            {/* 로그인 버튼 */}
            <button
              onClick={() => setIsLoggedIn(true)} // 로그인 상태 변경
              className="w-[97px] h-[66px] ml-4 bg-blue-900 bg-opacity-80 rounded-[5px] text-white text-[18px] leading-[22px]"
            >
              로그인
            </button>
          </div>
          {/* 하단 링크 */}
          <div className="flex justify-center space-x-[20px] pt-4 text-[12px] font-normal leading-[15px] text-opacity-70">
            <Link to="/findId" className="mr-1">아이디 찾기</Link>
            <span>|</span>
            <Link to="/findPw" className="ml-1 mr-1">비밀번호 찾기</Link>
            <span>|</span>
            <Link to="/signUp" className="ml-1">회원가입</Link>
          </div>
        </div>
      ) : (
        // 로그인 후 화면
        <AfterLoginForm username={username} onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
};

export default LoginForm;
