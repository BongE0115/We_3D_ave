// Header.jsx - 컴포넌트
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* 로고 */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="3D Weave Logo" className="h-8" />
        <span className="text-lg font-bold text-blue-700">3D Weave</span>
      </div>

      {/* 검색바 */}
      <div className="relative w-2/3">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          🔍
        </button>
      </div>
    </header>
  );
};

export default Header;
