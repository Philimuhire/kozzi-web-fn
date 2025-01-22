// Header.tsx
import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 font-outfit">
        <div className="text-2xl font-bold text-secondary">KOZZI HOMES</div>
        
        <div className="flex space-x-8 ml-96 text-secondary font-outfit text-lg">
          <a href="#shop" className="hover:text-third">Shop</a>
          <a href="#cart" className="hover:text-third">Cart</a>
        </div>

        <nav className="flex-grow flex justify-center space-x-6 text-secondary font-outfit text-lg">
          <Link to="/" className="hover:text-third">Home</Link>
          <Link to="/products" className="hover:text-third">Products</Link>
          <Link to="#about" className="hover:text-third">About</Link>
          <Link to="#contact" className="hover:text-third">Contact</Link>
        </nav>

        <button className="font-bold text-secondary py-2 px-4 rounded hover:text-third font-outfit text-lg">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
