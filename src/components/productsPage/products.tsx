import React, { useState } from "react";
import gardenImage from "../../assets/images/garden1.jpg";
import heroImage from "../../assets/images/heroImage.jpg";
import { useNavigate } from "react-router-dom";


const products = [
  { id: 1, name: "Wooden Chair", price: "$50.00", category: "Furniture", image: heroImage },
  { id: 2, name: "Study Table", price: "$120.00", category: "Furniture", image: gardenImage },
  { id: 3, name: "Green Armchair", price: "$85.00", category: "Furniture", image: heroImage },
  { id: 4, name: "Rattan Sofa", price: "$200.00", category: "Furniture", image: gardenImage },
  { id: 5, name: "Garden Chair", price: "$55.00", category: "Flower Gardens", image: gardenImage },
  { id: 6, name: "Office Stool", price: "$70.00", category: "Furniture", image: heroImage },
];

const categories = ["All", "Furniture", "Flowers", "Flower Gardens"];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-20 bg-secondary font-xl font-outfit mt-24">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer text-gray-600 hover:text-gray-800 ${
                  selectedCategory === category && "font-bold"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-3/4">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary font-outfit">{product.name}</h3>
                  <p className="text-lg font-semibold text-third mt-1 font-outfit">{product.price}</p>
                  <p className="text-lg text-gray-500 mt-1 font-outfit">{product.category}</p>
                </div>
                <div className="flex items-center justify-end p-4">
                <button className="bg-third font-outfit text-secondary px-4 py-2 rounded-lg hover:bg-[#EAB4AD] font-semibold">
                  <i className="fas fa-cart-plus"></i> Add to Cart
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
