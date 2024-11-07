import React from "react";
import { CiCircleInfo } from "react-icons/ci";

const ModalReviews = ({ data }) => {
  return (
    <div>
      <h1 className="text-xl font-light">Traveller Reviews</h1>

      <div className="mt-2 ml-1">
        <h1 className="text-lg font-semibold mb-2">Sort By</h1>
        <select
          name="Reviews"
          id="reviews"
          className="border w-1/3 h-14 rounded flex justify-center border-slate-300 focus:border-black"
        >
          <option value="HighestToLowest">Rating(Highest First)</option>
          <option value="LowestToHighest">Rating(Lowest First)</option>
          <option value="DateNewest">Date(Newest First)</option>
          <option value="DateOldest">Date(Oldest First)</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default ModalReviews;
