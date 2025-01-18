// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700">Kozzi Homes</div>
        
        {/* Shop and Cart Links */}
        <div className="flex space-x-8 ml-96 text-gray-700">
          <a href="#shop" className="hover:text-blue-800">Shop</a>
          <a href="#cart" className="hover:text-blue-800">Cart</a>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-800">Home</a>
          <a href="#products" className="hover:text-blue-800">Products</a>
          <a href="#about" className="hover:text-blue-800">About</a>
          <a href="#contact" className="hover:text-blue-800">Contact</a>
        </nav>

        {/* Sign In Button */}
        <button className="font-bold text-gray-500 py-2 px-4 rounded hover:text-blue-800">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
