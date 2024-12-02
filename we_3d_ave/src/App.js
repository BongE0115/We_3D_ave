// App.jsx
import React from "react";
import Header from "./static/Header";
import Footer from "./static/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 */}
      <Header />

      {/* 메인 컨텐츠 */}
      <main className="flex-grow">
        <HomePage />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default App;
