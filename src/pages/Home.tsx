import React from "react";
import Header from "../components/Header";
import Hero from '../components/Hero';
import ProductGrid from "../components/ProductGrid";
import FAQComponent from '../components/FAQ';
import Footer from "../components/Footer";
import ContactSection from "../components/Contact";
import AboutSection from "../components/About";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductGrid />
      <AboutSection />
      <FAQComponent />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;

