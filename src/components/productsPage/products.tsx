import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number; 
  categoryId: string; 
  imageUrl: string;
}

interface Category {
  id: string; 
  name: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products/getAllProducts"); 
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error: any) {
        setError(error.message);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories/getAllCategories"); 
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data); 
      } catch (error: any) {
        setError(error.message);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchProducts(), fetchCategories()]); 
      setLoading(false); 
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || categories.find(category => category.id === product.categoryId)?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  const categoryMap = categories.reduce((acc, category) => {
    acc[category.id] = category.name; 
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-20 bg-secondary font-xl font-outfit mt-24">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2">
            {["All", ...categories.map(category => category.name)].map((category) => (
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
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/products/getProduct/${product.id}`)} 
              >
                <img
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary font-outfit">{product.name}</h3>
                  <p className="text-lg font-semibold text-third mt-1 font-outfit">{`$${product.price.toFixed(2)}`}</p>
                  <p className="text-lg text-gray-500 mt-1 font-outfit">{categoryMap[product.categoryId]}</p> {}
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