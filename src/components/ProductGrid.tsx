import React, { useState, useEffect } from "react";

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

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

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
    <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-primary font-outfit mt-24 mb-8">
        Explore some of our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-secondary shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 ease-in-out"
          >
            <img
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary font-outfit">
                {product.name}
              </h3>
              <p className="text-lg font-semibold text-third mt-1 font-outfit">
                {`$${product.price.toFixed(2)}`}
              </p>
              <p className="text-lg text-gray-500 mt-1 font-outfit">
                {categoryMap[product.categoryId]}
              </p>{" "}
              {}
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
  );
};

export default ProductGrid;
