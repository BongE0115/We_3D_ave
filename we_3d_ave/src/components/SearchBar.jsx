// SearchBar.jsx - 컴포넌트
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="w-full max-w-2xl p-3 border rounded shadow-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
