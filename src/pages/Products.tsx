import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from '../components/productsPage/products';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsPage;

