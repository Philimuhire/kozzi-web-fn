// src/components/AllProducts.tsx
import React from "react";
import heroImage from '../assets/images/heroImage.jpg'; 
import gardenImage from '../assets/images/garden1.jpg';   

interface Product {
  id: number;
  name: string;
  price: string;
  category: string; 
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Wooden Chair", price: "$50.00", category: "Furniture", image: "chair" },
  { id: 2, name: "Study Table", price: "$120.00", category: "Flowers", image: "garden1" },
  { id: 3, name: "Green Armchair", price: "$85.00", category: "Furniture", image: "armchair" },
  { id: 4, name: "Rattan Sofa", price: "$200.00", category: "Flowers", image: "garden1" },
  { id: 5, name: "Minimalist Bed", price: "$350.00", category: "Furniture", image: "bed" },
  { id: 6, name: "Office Stool", price: "$70.00", category: "Flowers", image: "garden1" },
  { id: 7, name: "Round Coffee Table", price: "$90.00", category: "Furniture", image: "coffeeTable" },
  { id: 8, name: "Hanging Shelf", price: "$40.00", category: "Furniture", image: "shelf" },
  { id: 9, name: "Garden Chair", price: "$55.00", category: "Flower Gardens", image: "garden1" }, 
];

const ProductGrid: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-2xl font-bold text-gray-700 mt-24 mb-8">Explore some of our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 ease-in-out"
          >
            <img
              src={product.image === "garden1" ? gardenImage : heroImage}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p> 
            </div>
            <div className="flex items-center justify-end p-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
