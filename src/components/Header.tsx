import React from "react";

const Header = () => {
  return (
    <header className="p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Kozzi Homes</h1>
      <nav>
        <ul className="flex gap-4 text-lg">
          <li><a href="#hero" className="hover:text-third">Home</a></li>
          <li><a href="#products" className="hover:text-third">Products</a></li>
          <li><a href="#faq" className="hover:text-third">FAQ</a></li>
          <li><a href="#contact" className="hover:text-third">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
