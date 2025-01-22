import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary font-outfit py-12">
      <div className="w-full mx-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-evenly">
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-bold text-secondary">About Kozzi Homes</h3>
            <p className="text-secondary text-lg">
              We are dedicated to providing high-quality furniture and
              exceptional customer service. Visit us to explore our wide range of
              options.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-bold text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lg text-secondary hover:text-third transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-lg text-secondary hover:text-third transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg text-secondary hover:text-third transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-bold text-secondary">Contact Us</h3>
            <ul className="space-y-2 text-secondary">
              <li>
                <span className="font-semibold text-lg">Phone:</span> +250789058711
              </li>
              <li>
                <span className="font-semibold text-lg">Email:</span> kozzihomes@gmail.com
              </li>
              <li className="flex space-x-4 mt-8">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-third text-white rounded-full hover:bg-[#EAB4AD] transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-third text-white rounded-full hover:bg-[#EAB4AD] transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-third text-white rounded-full hover:bg-[#EAB4AD] transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-third text-white rounded-full hover:bg-[#EAB4AD] transition"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-secondary text-xl">
        © 2025 Kozzi Homes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
