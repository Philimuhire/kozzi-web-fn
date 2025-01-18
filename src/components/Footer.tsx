import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 text-gray-700 py-12">
      {/* Main Footer Container */}
      <div className="w-full mx-24 w-full px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-evenly">
          {/* Kozzi Homes Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Kozzi Homes</h3>
            <p className="text-gray-700">
              We are dedicated to providing high-quality furniture and
              exceptional customer service. Visit us to explore our wide range of
              options.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-semibold">Phone:</span> +250789058711
              </li>
              <li>
                <span className="font-semibold">Email:</span> kozzihomes@gmail.com
              </li>
              <li className="flex space-x-4 mt-4">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-primary transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-primary transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-primary transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-500 text-lg">
        © 2025 Furniture Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
