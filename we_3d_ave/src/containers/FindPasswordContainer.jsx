import React, { useState } from "react";
import InputField from "../components/user/InputField";
import Button from "../components/user/Button";

// 비밀번호 찾기 컨테이너
const FindPasswordContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleRequestCode = () => {
    console.log("인증 요청:", email);
  };

  const handleVerifyCode = () => {
    console.log("인증번호 확인:", code);
  };

  const handleCancel = () => {
    console.log("취소 버튼 클릭됨");
  };

  return (
    <div className="w-full max-w-[80%] md:max-w-[720px] lg:max-w-[960px] bg-white shadow-md rounded-xl px-6 py-10 relative">
      {/* 제목 */}
      <h1 className="text-3xl md:text-2xl font-bold text-center mb-10">
        비밀번호 찾기
      </h1>

      {/* 이름 입력 */}
      <div className="mb-6">
        <label className="block text-lg md:text-md font-light text-black mb-2">
          이름
        </label>
        <input
          type="text"
          placeholder="예) 홍길동"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-12 md:h-16 px-4 bg-gray-200/50 border border-black rounded-lg text-lg md:text-md placeholder-gray-400"
        />
      </div>

      {/* 이메일 입력 및 인증 요청 */}
      <div className="mb-6">
        <label className="block text-lg md:text-md font-light text-black mb-2">
          이메일
        </label>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="예) apple@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 md:h-16 px-4 bg-gray-200/50 border border-black rounded-lg text-lg md:text-md placeholder-gray-400"
          />
          <button
            onClick={handleRequestCode}
            className="w-32 md:w-40 h-12 md:h-16 bg-gray-300 border border-black rounded-lg text-lg md:text-md"
          >
            인증 요청
          </button>
        </div>
        
      </div>

      {/* 인증번호 입력 및 확인 */}
      <div className="mb-10">
        <label className="block text-lg md:text-md font-light text-black mb-2">
          인증번호
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="인증번호를 입력해주세요."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-12 md:h-16 px-4 bg-gray-200/50 border border-black rounded-lg text-lg md:text-md placeholder-gray-400"
          />
          <button
            onClick={handleVerifyCode}
            className="w-32 md:w-40 h-12 md:h-16 bg-gray-300 border border-black rounded-lg text-lg md:text-md"
          >
            인증번호 확인
          </button>
        </div>
        
      </div>

      {/* 취소 버튼 */}
      <div>
        <button
          onClick={handleCancel}
          className="w-full h-12 md:h-16 bg-gray-300 border border-black rounded-lg text-lg md:text-md"
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default FindPasswordContainer;
