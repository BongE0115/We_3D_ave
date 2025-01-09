import React, { useState } from "react";

const SignUpContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleCheckId = () => {
    if (!id) {
      alert("아이디를 입력해주세요.");
      return;
    }
    alert("아이디 중복 확인이 완료되었습니다.");
  };

  const handleRequestCode = () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    alert("인증번호가 발송되었습니다.");
  };

  const handleVerifyCode = () => {
    if (!code) {
      alert("인증번호를 입력해주세요.");
      return;
    }
    alert("인증번호가 확인되었습니다.");
  };

  const handleCancel = () => {
    alert("회원가입이 취소되었습니다.");
  };

  const handleSignUp = () => {
    if (!id || !password || !confirmPassword || !email || !code) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("회원가입이 완료되었습니다.");
  };

  return (
    <div
      className="w-full max-w-[80%] md:max-w-[720px] lg:max-w-[960px] bg-white shadow-md rounded-xl px-6 py-10 relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* 제목 */}
      <h1 className="text-2xl md:text-2xl font-bold text-center text-black mb-10">
        회원가입
      </h1>

      {/* 아이디 입력 */}
      <div className="mb-6">
        <label className="block text-md font-light text-black mb-2">
          아이디
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="예) abcd1234"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="flex-1 h-12 px-4 bg-gray-200/50 border border-black rounded-lg text-md placeholder-gray-400"
          />
          <button
            onClick={handleCheckId}
            className="px-4 py-2 bg-gray-300 border border-black rounded-lg text-md"
          >
            중복 확인
          </button>
        </div>
      </div>

      {/* 비밀번호 입력 */}
      <div className="mb-6">
        <label className="block text-md font-light text-black mb-2">
          비밀번호
        </label>
        <input
          type="password"
          placeholder="영문 숫자 조합 8~16자"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 px-4 bg-gray-200/50 border border-black rounded-lg text-md placeholder-gray-400"
        />
      </div>

      {/* 비밀번호 확인 */}
      <div className="mb-6">
        <label className="block text-md font-light text-black mb-2">
          비밀번호 확인
        </label>
        <input
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full h-12 px-4 bg-gray-200/50 border border-black rounded-lg text-md placeholder-gray-400"
        />
      </div>

      {/* 이메일 입력 */}
      <div className="mb-6">
        <label className="block text-md font-light text-black mb-2">
          이메일
        </label>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="예) apple@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 px-4 bg-gray-200/50 border border-black rounded-lg text-md placeholder-gray-400"
          />
          <button
            onClick={handleRequestCode}
            className="px-4 py-2 bg-gray-300 border border-black rounded-lg text-md"
          >
            인증 요청
          </button>
        </div>
      </div>

      {/* 인증번호 입력 */}
      <div className="mb-6">
        
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="인증번호를 입력해주세요."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 h-12 px-4 bg-gray-200/50 border border-black rounded-lg text-md placeholder-gray-400"
          />
          <button
            onClick={handleVerifyCode}
            className="px-4 py-2 bg-gray-300 border border-black rounded-lg text-md"
          >
            인증번호 확인
          </button>
        </div>
      </div>

      {/* 취소 버튼 */}
      <button
        onClick={handleCancel}
        className="w-full h-12 bg-gray-300 border border-black rounded-lg text-md text-black font-medium hover:bg-gray-400"
      >
        취소
      </button>
    </div>
  );
};

export default SignUpContainer;
