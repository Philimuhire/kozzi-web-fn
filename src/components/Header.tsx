// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex items-center justify-between px-4 font-outfit">
        {/* Logo */}
        <div className="text-2xl font-bold text-secondary">KOZZI HOMES</div>
        
        {/* Shop and Cart Links */}
        <div className="flex space-x-8 ml-96 text-secondary font-outfit text-lg">
          <a href="#shop" className="hover:text-third">Shop</a>
          <a href="#cart" className="hover:text-third">Cart</a>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-6 text-secondary font-outfit text-lg">
          <a href="#" className="hover:text-third">Home</a>
          <a href="#products" className="hover:text-third">Products</a>
          <a href="#about" className="hover:text-third">About</a>
          <a href="#contact" className="hover:text-third">Contact</a>
        </nav>

        {/* Sign In Button */}
        <button className="font-bold text-secondary py-2 px-4 rounded hover:text-third font-outfit text-lg">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
