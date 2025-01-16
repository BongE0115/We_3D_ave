import React, { useState } from "react";
import InputField from "../components/user/InputField";
import Button from "../components/user/Button";

const UserInfoChangeForm = () => {
  const [name, setName] = useState("권설");
  const [email, setEmail] = useState("piecekongju@gmail.com");
  const [authCode, setAuthCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRequestAuthCode = () => {
    console.log("인증 코드 요청");
  };

  const handleVerifyAuthCode = () => {
    console.log("인증 완료");
  };

  const handleUpdateInfo = () => {
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("회원정보 변경 완료");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center">회원정보 변경</h1>

      <InputField label="이름" value={name} onChange={(e) => setName(e.target.value)} disabled={true} />

      <div className="mb-6">
        <label className="block text-lg font-light text-black mb-2">이메일</label>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={true}
            className="flex-grow h-12 px-4 bg-gray-200 border border-black rounded-lg text-lg placeholder-gray-400 disabled:opacity-50"
          />
          <Button label="인증 요청" onClick={handleRequestAuthCode} />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-light text-black mb-2">인증번호</label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="인증번호 입력"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
            className="flex-grow h-12 px-4 bg-gray-200 border border-black rounded-lg text-lg placeholder-gray-400"
          />
          <Button label="인증 완료" onClick={handleVerifyAuthCode} />
        </div>
      </div>

      <InputField
        label="새 비밀번호"
        placeholder="영문 숫자 조합 8~16자"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
      />
      <InputField
        label="새 비밀번호 확인"
        placeholder="비밀번호를 한 번 더 입력해주세요."
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
      />

      <div className="flex gap-4 mt-8">
        <Button label="회원정보 변경" onClick={handleUpdateInfo} primary={true} />
        <Button label="취소" onClick={() => console.log("취소")} />
      </div>
    </div>
  );
};

export default UserInfoChangeForm;