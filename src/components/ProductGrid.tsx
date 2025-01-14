import React from "react";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Orchid Plant", price: "$20", image: "/assets/flower3.jpg" },
    { id: 2, name: "Sunflower Garden", price: "$60", image: "/assets/garden2.jpg" },
    { id: 3, name: "Daisy Bouquet", price: "$15", image: "/assets/flower4.jpg" },
    { id: 4, name: "Succulent Mix", price: "$35", image: "/assets/flower5.jpg" },
  ];

  return (
    <section id="products" className="p-8 bg-forth">
      <h3 className="text-3xl font-bold mb-4">Explore All Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="shadow-lg p-4 bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mt-4">{product.name}</h4>
            <p className="text-lg mt-2 text-third">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
