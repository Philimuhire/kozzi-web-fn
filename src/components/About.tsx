import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-secondary py-16 px-6 md:px-12 lg:px-20 font-outfit mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-forth">
          Discover who we are and what we stand for. Our mission is to deliver quality,
          innovation, and value to our customers while ensuring excellence in everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-lg shadow-md p-6 text-center transition-transform transform hover:-translate-y-3 hover:shadow-xl ease-out duration-300">
          <div className="text-secondary text-5xl mb-4">
            <i className="fas fa-heart"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-secondary">Our Mission</h3>
          <p className="text-secondary text-lg">
            To provide exceptional services and products that enhance the lives of our customers.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-lg shadow-md p-6 text-center transition-transform transform hover:-translate-y-3 hover:shadow-xl ease-out duration-300">
          <div className="text-secondary text-5xl mb-4">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-secondary">Our Vision</h3>
          <p className="text-secondary text-lg">
            To become a globally recognized leader in our industry, renowned for innovation and integrity.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-lg shadow-md p-6 text-center transition-transform transform hover:-translate-y-3 hover:shadow-xl ease-out duration-300">
          <div className="text-secondary text-5xl mb-4">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-secondary">Our Team</h3>
          <p className="text-secondary text-lg">
            A dedicated group of professionals driven to deliver excellence in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
