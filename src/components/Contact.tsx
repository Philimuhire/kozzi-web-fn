import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    const contactData = {
      name,
      email,
      phoneNumber,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/contact/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage(""); 
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to send message.");
        setSuccessMessage(""); 
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message.");
      setSuccessMessage(""); 
    }
  };

  return (
    <section id="contact" className="bg-secondary text-lg py-12 mx-12 sm:mx-16 md:mx-20 lg:mx-32 font-outfit mt-8">
      <h2 className="text-lg md:text-3xl font-semibold mb-8 text-primary">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 text-forth mt-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-forth">
              <i className="fa fa-phone-alt text-xl"></i>
            </div>
            <p className="text-xl text-forth">
              Have a question or need assistance selecting the perfect blooms?
              Our team is here to help! For urgent inquiries, feel free to reach
              out to us directly at <strong>0786084658</strong>. We’re just a
              call away to ensure your floral needs are met promptly and
              beautifully. <br />
              <br />
              Stay connected with us! Visit us on our social media platforms to
              explore more of our beautiful flowers and stay updated. Click the
              icons below to follow us.
            </p>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 rounded-lg shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-xl text-fifth font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md px-4 py-2 text-lg focus:outline-none focus:border-fifth"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xl text-fifth font-semibold mb-1"
              >
                Your Email / Phone number
              </label>
              <input
                type="text" 
                id="email"
                placeholder="Your email / Phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-4 py -2 text-lg focus:outline-none focus:border-fifth"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xl text-fifth font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-md px-4 py-2 text-lg focus:outline-none focus:border-fifth"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-third text-secondary font-outfit py-3 px-8 rounded-lg hover:bg-[#EAB4AD] transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;