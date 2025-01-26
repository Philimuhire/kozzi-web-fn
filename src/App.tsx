import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products"; 
import SingleProductPage from './pages/singleProduct'; 
import './index.css';
import '@fontsource/outfit';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/getProduct/:id" element={<SingleProductPage />} /> {}
      </Routes>
    </Router>
  );
};

export default App;