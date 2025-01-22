import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleProduct from '../components/productsPage/singleProduct';

const SingleProductPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SingleProduct />
      <Footer />
    </div>
  );
};

export default SingleProductPage;

