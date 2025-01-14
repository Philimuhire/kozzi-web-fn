import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="p-8 bg-white">
      <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-semibold">What types of flowers do you sell?</h4>
          <p>We sell a variety of flowers, including roses, tulips, daisies, and orchids.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Do you deliver flower gardens?</h4>
          <p>Yes, we deliver fully assembled flower gardens to your doorstep.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">How can I place an order?</h4>
          <p>You can place an order directly through our website by clicking "Shop Now."</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
