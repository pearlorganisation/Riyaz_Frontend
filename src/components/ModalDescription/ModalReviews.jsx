import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalReviews = ({ data }) => {
  const [carReview, setCarReview] = useState([]);

  useEffect(() => {
    if (data?._id) {
      const fetchReviews = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL}/vehicles/${data._id}/reviews`);
          console.log("API Response:", response.data);
          // Access the nested data array
          setCarReview(response.data.data || []);
        } catch (error) {
          console.error("Error fetching reviews:", error);
          setCarReview([]); // Fallback in case of error
        }
      };
      fetchReviews();
    }
  }, [data]);

  return (
    <div>
      <h1 className="text-xl font-light">Traveller Reviews</h1>

      {/* Sort dropdown */}
      <div className="mt-2 ml-1">
        <h1 className="text-lg font-semibold mb-2">Sort By</h1>
        <select
          name="Reviews"
          id="reviews"
          className="border w-1/3 h-14 rounded flex justify-center border-slate-300 focus:border-black"
        >
          <option value="HighestToLowest">Rating (Highest First)</option>
          <option value="LowestToHighest">Rating (Lowest First)</option>
          <option value="DateNewest">Date (Newest First)</option>
          <option value="DateOldest">Date (Oldest First)</option>
        </select>
      </div>

      {/* Reviews display */}
      <div className="mt-4">
        {carReview.length > 0 ? (
          carReview?.map((review) => (
            <div key={review._id} className="border p-2 mb-2 rounded">
              <h1 className="font-semibold">Rating: {review.rating}</h1>
              <p>{review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};
export default ModalReviews;
