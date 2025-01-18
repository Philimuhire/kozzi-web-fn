import React from 'react';
import heroImage from '../assets/images/garden1.jpg';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            Elevate Your Space with Our Furniture and Flowers
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover exquisite furniture and beautifully curated flower gardens to transform your home into a stunning oasis.
          </p>
          <button
            className="bg-gray-700 text-white py-3 px-8 rounded-lg hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:mt-0 mt-8 relative">
          <img
            src={heroImage}
            alt="Furniture and flowers"
            className="rounded-xl shadow-lg max-w-2xl w-3/4 w-full h-auto object-cover -mb-16 lg:-mb-24 xl:-mb-48"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
