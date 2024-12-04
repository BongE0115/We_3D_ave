// containers/FindIdContainer.jsx
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

// "아이디 찾기" 컨테이너
const FindIdContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleRequestCode = () => {
    // 인증 요청 로직 처리
    console.log("인증 요청:", email);
  };

  const handleVerifyCode = () => {
    // 인증번호 확인 로직 처리
    console.log("인증번호 확인:", code);
  };

  const handleFindId = () => {
    // 아이디 찾기 로직 처리
    console.log("아이디 찾기:", { name, email, code });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-6">아이디 찾기</h1>
      <InputField
        label="이름"
        placeholder="예) 홍길동"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex items-center mb-4">
        <InputField
          label="이메일"
          placeholder="예) apple@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button text="인증 요청" onClick={handleRequestCode} variant="primary" />
      </div>
      <div className="flex items-center mb-4">
        <InputField
          label="인증번호"
          placeholder="인증번호를 입력해주세요."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button text="인증번호 확인" onClick={handleVerifyCode} variant="primary" />
      </div>
      <div className="flex gap-4">
        <Button text="찾기" onClick={handleFindId} variant="primary" />
        <Button text="취소" onClick={() => console.log("취소")} />
      </div>
    </div>
  );
};

export default FindIdContainer;
