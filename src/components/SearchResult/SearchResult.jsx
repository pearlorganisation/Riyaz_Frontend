import React, { useEffect, useState } from "react";
 
import VehicleCard from "./VehicleCard";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../features/actions/vehicleAction";

const SearchResult = ({ date, returnDate }) => {
  const dispatch = useDispatch();
  const { vehicleInfo, isSuccess } = useSelector((state) => state.vehicle);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch vehicles based on the current page
    dispatch(getVehicles(currentPage));
  }, [dispatch, currentPage]);

  // Filter vehicles based on availability and selected date range
  const filteredVehicles = vehicleInfo?.filter((vehicle) => {
    if (!date && !returnDate) {
      return true;
    }

    const availableFrom = new Date(vehicle.availableFrom);
    const availableTo = new Date(vehicle.availableTo);
    const selectedStartDate = new Date(date);
    const selectedEndDate = new Date(returnDate);

    return availableFrom <= selectedEndDate && availableTo >= selectedStartDate;
  });

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-20 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="mt-5">{ !isSuccess ? "No" : filteredVehicles?.length} Results</h1>
        <div className="flex flex-row gap-4 items-center">
          <h1>Sort By</h1>
          <select className="px-5 py-4 border border-blue-500 rounded-md text-lg font-semibold" defaultValue="vh-lp">
            <option value="price-lth">Pricing - Low to High</option>
            <option value="price-htl">Pricing - High to Low</option>
            <option value="rating-h">Rating - Highest</option>
            <option value="rating-l">Rating - Lowest</option>
          </select>
        </div>
      </div>

      {filteredVehicles?.length === 0 ? (
        <h1>No Data Found</h1>
      ) : (
        <>
          {isSuccess ? (
            filteredVehicles?.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))
          ) : (
            <div className="flex justify-center items-center mt-8">
              <h1 className="text-3xl font-semibold">No Vehicles found</h1>
            </div>
          )}

          <div className="flex justify-center mt-4">
            {/* Render pagination buttons based on backend pagination data */}
            {Array.from({ length: vehicleInfo?.pagination?.pages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 border ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResult;