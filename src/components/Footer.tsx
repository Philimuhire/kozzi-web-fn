import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-primary text-white text-center">
      <p>&copy; 2025 Kozzi Homes. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-third">Facebook</a>
        <a href="#" className="hover:text-third">Instagram</a>
        <a href="#" className="hover:text-third">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
