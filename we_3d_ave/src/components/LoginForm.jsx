import React from "react";

const LoginForm = () => {
  return (
    <div className="absolute w-[379px] h-[270px] left-[986px] top-[180px] bg-white border-[1.5px] border-blue-900 rounded-[34px]">
      <h2 className="absolute left-[39px] top-[38px] text-[30px] font-normal leading-[36px] tracking-[0.3em] text-black">
        로그인
      </h2>
      {/* 아이디 입력 */}
      <div className="absolute w-[188px] h-[30px] left-[39px] top-[96px] bg-gray-200 bg-opacity-50 rounded-[5px]">
        <span className="absolute left-[7px] top-[7px] text-[15px] text-opacity-70 font-normal leading-[18px]">
          아이디
        </span>
      </div>
      {/* 비밀번호 입력 */}
      <div className="absolute w-[188px] h-[30px] left-[39px] top-[142px] bg-gray-200 bg-opacity-50 rounded-[5px]">
        <span className="absolute left-[7px] top-[8px] text-[15px] text-opacity-70 font-normal leading-[18px]">
          비밀번호
        </span>
      </div>
      {/* 로그인 버튼 */}
      <button className="absolute w-[97px] h-[76px] left-[243px] top-[96px] bg-blue-900 bg-opacity-80 rounded-[5px] text-white text-[18px] leading-[22px]">
        로그인
      </button>
      {/* 하단 링크 */}
      <div className="absolute left-[50px] top-[192px] flex space-x-[50px] text-[12px] font-normal leading-[15px] text-opacity-70">
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
        <span>회원가입</span>
      </div>
    </div>
  );
};

export default LoginForm;
