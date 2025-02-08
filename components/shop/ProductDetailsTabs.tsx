import React, { useState } from "react";
import { Star } from "lucide-react";

// types of product details --> additional tabs details
interface ProductDetailsTabsProps {
  weight?: string;
  dimensions?: string;
  colors?: string[];
  material?: string;
}

//types for review
interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
}

//types for review formdata
interface ReviewFormData {
  name: string;
  email: string;
  review: string;
  rating: number;
}

const ProductDetailsTabs: React.FC<ProductDetailsTabsProps> = ({
  weight = "0.3 kg",
  dimensions = "15 x 10 x 1 cm",
  colors = ["Black", "Brown", "White"],
  material = "Metal",
}) => {
  // for setting tabs active
  const [activeTab, setActiveTab] = useState<
    "description" | "additional" | "reviews"
  >("description");

  // Dummy reviews for showing
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: "Scarlet witch",
      date: "6 May 2020",
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
    {
      id: 2,
      author: "Scarlet witch",
      date: "6 May 2020",
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
  ]);

  // defining tabs
  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: "Reviews(0)" },
  ];

  // review form data
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    email: "",
    review: "",
    rating: 0,
  });

  // handling input field onchange
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handling star rating field
  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  // handeling review and setting it into review array
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: reviews.length + 1,
      author: formData.name,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      rating: formData.rating,
      text: formData.review,
    };
    setReviews([...reviews, newReview]);
    setFormData({ name: "", email: "", review: "", rating: 0 });
  };

  // for showing rating stars
  const renderStars = (rating: number) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={star <= rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );

  // for rendering tabs content
  const renderTabContent = () => {
    switch (activeTab) {
      // for description tab
      case "description":
        return (
          <div className="p-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
              porta tempor odio, in molestie diam bibendum sed.
            </p>
          </div>
        );
      // for additional tabs
      case "additional":
        return (
          <div className="p-4 space-y-2">
            <div className="flex">
              <span className="font-semibold w-1/3">Weight:</span>
              <span>{weight}</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-1/3">Dimensions:</span>
              <span>{dimensions}</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-1/3">Colours:</span>
              <span>{colors.join(", ")}</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-1/3">Material:</span>
              <span>{material}</span>
            </div>
          </div>
        );
      // for review tab
      case "reviews":
        return (
          <div className="md:flex md:gap-5 w-full py-3 px-5">
            <div className="space-y-4 px-5 md:px-10 ">
              <div>
                <h2 className="font-semibold">
                  {reviews?.length} Reviews lira earings
                </h2>
              </div>
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 md:w-11/12">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold">{review.author}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  {renderStars(review.rating)}
                  <p className="mt-2 text-gray-500">{review.text}</p>
                </div>
              ))}
            </div>

            {/* Form for submiting reviews */}
            <form
              onSubmit={handleSubmitReview}
              className="space-y-4 px-5 md:w-2/3 md:px-10 "
            >
              <h3 className="text-xl font-semibold">Add a Review</h3>
              <p className="text-sm text-gray-600">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <div className="flex flex-col space-y-2">
                <label htmlFor="review" className="font-medium text-gray-400">
                  Your Review*
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 rounded p-2"
                  required
                />
              </div>

              <div className="grid gap-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="font-medium text-gray-400">
                    Enter your name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-300  p-2"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="font-medium text-gray-400">
                    Enter your email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-300 p-2 "
                    required
                  />
                </div>
              </div>

              {/* Check box */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="save-details" className="rounded" />
                <label htmlFor="save-details" className="text-sm text-gray-400">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              {/* Rating stars */}
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Your Rating*</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= formData.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      fill={star <= formData.rating ? "currentColor" : "none"}
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-screen mt-12 border-t pt-8">
      {/* Tabs Navigation */}
      <div className="border-b flex md:block gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`
              px-4 py-2 text-sm font-medium 
              ${
                activeTab === tab.id
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }
              transition-colors duration-200
              focus:outline-none
              flex-1 
            `}
            onClick={() => setActiveTab(tab.id as any)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default ProductDetailsTabs;
