import React from "react";

const ProductHighlights = () => {
  return (
    <section className="p-8 bg-white">
      <h3 className="text-3xl font-bold mb-4">Our Popular Picks</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="shadow-lg p-4">
          <img src="/assets/flower1.jpg" alt="Flower" className="w-full h-48 object-cover" />
          <h4 className="text-xl font-semibold mt-4">Rose Bouquet</h4>
          <p className="text-lg mt-2 text-third">$25</p>
        </div>
        <div className="shadow-lg p-4">
          <img src="/assets/garden1.jpg" alt="Garden" className="w-full h-48 object-cover" />
          <h4 className="text-xl font-semibold mt-4">Mini Flower Garden</h4>
          <p className="text-lg mt-2 text-third">$50</p>
        </div>
        <div className="shadow-lg p-4">
          <img src="/assets/flower2.jpg" alt="Flower" className="w-full h-48 object-cover" />
          <h4 className="text-xl font-semibold mt-4">Tulip Arrangement</h4>
          <p className="text-lg mt-2 text-third">$30</p>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
