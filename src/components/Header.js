import React from "react";
const Header = () => {
  return (
    <header className="flex justify-center mt-5 font-bold">
      <img src="/images/icon.png" alt="Icon" className="mr-12" />
      <nav className="flex space-x-8">
        <a href="#home" className="hover:text-blue-300">
          ホーム
        </a>

        <a href="#about" className="hover:text-blue-300">
          会社情報
        </a>

        <a href="#services" className="hover:text-blue-300">
          採用情報
        </a>

        <a href="#contact" className="hover:text-blue-300">
          事業内容
        </a>
        <a href="#about" className="hover:text-blue-300">
          発表論文
        </a>

        <a href="#services" className="hover:text-blue-300">
          アクセス
        </a>

        <a href="#contact" className="hover:text-blue-300">
          お問い合わせ
        </a>
        <a href="#contact" className="hover:text-blue-300">
          Instagram
        </a>
      </nav>
    </header>
  );
};

export default Header;
