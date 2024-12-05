// FindPasswordContainer.jsx: 비밀번호 찾기 컨테이너
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

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
    <div className="space-y-6">
      {/* 페이지 제목 */}
      <h1 className="text-3xl font-bold text-center">비밀번호 찾기</h1>

      {/* 이름 입력 */}
      <InputField
        label="이름"
        placeholder="예) 홍길동"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* 이메일 입력 및 인증 요청 */}
      <div className="flex items-center gap-4">
        <InputField
          label="이메일"
          placeholder="예) apple@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button text="인증 요청" onClick={handleRequestCode} variant="primary" />
      </div>

      {/* 인증번호 입력 및 확인 */}
      <div className="flex items-center gap-4">
        <InputField
          label="인증번호"
          placeholder="인증번호를 입력해주세요."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button text="인증번호 확인" onClick={handleVerifyCode} variant="primary" />
      </div>

      {/* 취소 버튼 */}
      <div className="flex justify-center">
        <Button text="취소" onClick={handleCancel} />
      </div>
    </div>
  );
};

export default FindPasswordContainer;
