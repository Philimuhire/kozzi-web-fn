import React, { useState } from "react";
import garden1 from "../assets/images/garden1.jpg";

interface FAQ {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is the return policy for furniture purchases?",
      answer: "You can return furniture within 30 days of purchase, provided it is in original condition.",
    },
    {
      question: "Do you offer free delivery for orders?",
      answer: "Yes, free delivery is available for orders above $200.",
    },
    {
      question: "Can I customize a piece of furniture?",
      answer: "Yes, we offer customization options for selected furniture items.",
    },
    {
      question: "How long does it take to deliver my order?",
      answer: "Delivery typically takes 5-7 business days, depending on your location.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mx-24 my-8 p-4">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={garden1}
            alt="FAQ Visual"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-primary font-outfit mb-4">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-[#8B572A] text-xl font-outfit">{faq.question}</span>
                  <span className="text-xl font-bold text-primary">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="mt-2 p-4 bg-white border-l-4 border-primary rounded-lg text-[#333333] text-xl font-outfit">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              className="bg-third text-secondary font-outfit py-3 px-8 rounded-lg hover:bg-[#EAB4AD] transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
