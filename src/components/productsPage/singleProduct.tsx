import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gardenImage from "../../assets/images/garden1.jpg";
import heroImage from "../../assets/images/heroImage.jpg";

const productsData = [
  {
    id: 1,
    name: "Wooden Chair",
    price: "$50.00",
    category: "Furniture",
    image: heroImage,
    description: "A beautiful handcrafted wooden chair, perfect for your living room or office.",
    thumbnails: [heroImage, gardenImage],
  },
  {
    id: 2,
    name: "Study Table",
    price: "$120.00",
    category: "Furniture",
    image: gardenImage,
    description: "Sturdy and spacious study table ideal for working or studying.",
    thumbnails: [gardenImage, heroImage],
  },
  {
    id: 3,
    name: "Green Armchair",
    price: "$85.00",
    category: "Furniture",
    image: heroImage,
    description: "Comfortable green armchair, great for relaxing in style.",
    thumbnails: [heroImage, gardenImage],
  },
  {
    id: 4,
    name: "Rattan Sofa",
    price: "$200.00",
    category: "Furniture",
    image: gardenImage,
    description: "Elegant rattan sofa, a great addition to your home decor.",
    thumbnails: [gardenImage, heroImage],
  },
  {
    id: 5,
    name: "Garden Chair",
    price: "$55.00",
    category: "Flower Gardens",
    image: gardenImage,
    description: "Durable and weather-resistant garden chair for outdoor use.",
    thumbnails: [gardenImage, heroImage],
  },
  {
    id: 6,
    name: "Office Stool",
    price: "$70.00",
    category: "Furniture",
    image: heroImage,
    description: "Ergonomic office stool designed for comfort and support.",
    thumbnails: [heroImage, gardenImage],
  },
];

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  thumbnails: string[];
}

interface Review {
  id: number;
  reviewer: string;
  comment: string;
  rating: number;
  date: string;
}

const SingleProductView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : productsData;
  });

  const product = products.find((prod) => prod.id === parseInt(id || "", 10)) as Product | undefined;

  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [reviewStars, setReviewStars] = useState(0);
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem(`reviews-${id}`);
    return storedReviews ? JSON.parse(storedReviews) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Product not found!</h2>
        <button
          className="mt-4 px-6 py-2 bg-primary text-secondary rounded-lg font-semibold hover:bg-third"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddReview = () => {
    if (reviewText && reviewStars > 0) {
      const newReview = {
        id: Date.now(),
        reviewer: "Anonymous",
        comment: reviewText,
        rating: reviewStars,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReview]);
      setReviewText("");
      setReviewStars(0);
    }
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-20 mt-24 bg-secondary font-outfit">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex mt-4 gap-4">
            {product.thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                  selectedImage === thumbnail ? "border-primary" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(thumbnail)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold text-primary">{product.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{product.category}</p>
          <p className="text-2xl font-bold text-third mt-4">{product.price}</p>
          <p className="text-lg text-gray-700 mt-6">{product.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <span className="text-xl text-forth font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <div className="px-4 py-2 text-lg">{quantity}</div>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-third text-secondary px-6 py-2 rounded-lg hover:bg-[#EAB4AD] font-semibold">
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
            <button
              className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-[#062C56] font-semibold"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Add Your Review</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`text-2xl ${
                  reviewStars > index ? "text-third" : "text-gray-400"
                }`}
                onClick={() => setReviewStars(index + 1)}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="border border-gray-300 p-2 rounded-lg w-full"
            rows={4}
          ></textarea>
          <button
            className="bg-third text-secondary px-4 py-2 rounded-lg hover:bg-[#EAB4AD] font-semibold"
            onClick={handleAddReview}
          >
            Submit Review
          </button>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review: Review) => (
            <div key={review.id} className="border-b border-gray-300 py-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{review.reviewer}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex gap-1 text-third">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
        )}
      </div>
    </div>
  );
};

export default SingleProductView;
