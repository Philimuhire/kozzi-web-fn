import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number; 
  categoryId: string; 
  imageUrl: string;
  description: string;
  quantity: number; 
}

interface Category {
  id: string;
  name: string;
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

  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [reviewStars, setReviewStars] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/getProduct/${id}`); 
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.imageUrl); 
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

    fetchProduct();
    fetchCategories();
  }, [id]);

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

  const categoryMap = categories.reduce((acc, category) => {
    acc[category.id] = category.name; 
    return acc;
  }, {} as Record<string, string>);

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
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-20 h-20 rounded-lg cursor-pointer border-2 border-gray-300"
              onClick={() => setSelectedImage(product.imageUrl)}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold text-primary">{product.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{categoryMap[product.categoryId]}</p>
          <p className="text-2xl font-bold text-third mt-4">{`$${product.price.toFixed(2)}`}</p>
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
          <button className="mt-6 bg-third text-secondary px-4 py-2 rounded-lg hover:bg-[#EAB4AD] font-semibold">
            <i className="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">Reviews</h2>
        <div className="mt-4">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-300 py-4">
                <p className="font-semibold">{review.reviewer}</p>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-gray-500">{`Rating: ${review.rating} stars`}</p>
                <p className="text-gray-400 text-sm">{review.date}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Leave a Review</h3>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mt-2"
            rows={4}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
          />
          <div className="flex items-center mt-2">
            <span className="mr-4">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer ${star <= reviewStars ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => setReviewStars(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button
            className="mt-4 bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-third font-semibold"
            onClick={handleAddReview}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;