import React from "react"; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const LoginForm = () => { 
  return (
    <div className="w-[379px] h-[270px] bg-white border-[1.5px] border-blue-900 rounded-[34px] p-4 relative">
      <h2 className="text-[30px] font-normal leading-[36px] tracking-[0.3em] text-black mt-4 mb-4 pl-4"> 
        로그인 
        <i className="fas fa-lock"></i> 
      </h2>
      <div className="flex justify-center pt-4 mb-4"> 
        {/* 아이디와 비밀번호 입력 폼 */} 
        <div className="flex flex-col space-y-2"> 
          {/* 아이디 입력 */} 
          <div className="w-[188px] h-[30px] bg-gray-200 bg-opacity-50 rounded-[5px] flex items-center pl-2"> 
            <span className="text-[15px] text-opacity-70 font-normal leading-[18px]"> 
              아이디 
            </span> 
          </div> 
          {/* 비밀번호 입력 */}  
          <div className="w-[188px] h-[30px] bg-gray-200 bg-opacity-50 rounded-[5px] flex items-center pl-2">
            <span className="text-[15px] text-opacity-70 font-normal leading-[18px]"> 
              비밀번호
            </span>
          </div>
        </div> 
        {/* 로그인 버튼 */} 
        <button className="w-[97px] h-[66px] ml-4 bg-blue-900 bg-opacity-80 rounded-[5px] text-white text-[18px] leading-[22px]"> 
          로그인
        </button> 
      </div> 
      {/* 하단 링크 */} 
      <div className="flex justify-center space-x-[20px] pt-4 text-[12px] font-normal leading-[15px] text-opacity-70"> 
        <span>아이디 찾기</span> 
        <span>|</span> 
        <span>비밀번호 찾기</span>
        <span>|</span> 
        <span>회원가입</span> 
      </div> 
    </div> 
  ); 
}; 
export default LoginForm;