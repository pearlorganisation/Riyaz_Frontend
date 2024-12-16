import React, { useEffect, useState } from "react";
 
import VehicleCard from "./VehicleCard";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../features/actions/vehicleAction";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const sortBY =[
  {
    id:1,
    value: "price-asc"
  },
  {
    id: 2,
    value: "price-desc"
  },
  {
    id: 3,
    value: "rating-asc"
  },
  {
    id: 4,
    value: "rating-desc"
  },

]
const SearchResult = ({ date, returnDate }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  // const searchParams = new URLSearchParams()
  const { vehicleInfo, isSuccess } = useSelector((state) => state.vehicle);
  const [sortBy, setSortBy] = useState("")
 
const allparams = searchParams.forEach((val,key)=>{
  console.log('the key and value is', key,val)
})
  const handleSelect =async (sortValue) => {
    setSortBy(sortValue)
    // searchParams.append("sortBy",sortValue)
  }  
 
   console.log("-------------sortby", sortBy)
  useEffect(() => {
    // Fetch vehicles based on the current page
    searchParams.append("sortBy",sortBy)
    dispatch(getVehicles({sortBy:sortBy}));
  }, [dispatch, sortBy]);
  // useEffect(() => {
  //   const updatedSearchParams = new URLSearchParams(searchParams);

  //   if (sortBy) {
  //     // Add or update the "sortBy" query parameter
  //     updatedSearchParams.set("sortBy", sortBy);
  //   } else {
  //     // Remove the "sortBy" query parameter if the selection is empty
  //     updatedSearchParams.delete("sortBy");
  //   }

  //   // Update the URL only if the parameters have changed
  //   navigate(`?${updatedSearchParams.toString()}`, { replace: true });

  //   // Fetch vehicles based on the current
  //   dispatch(getVehicles({ sortBy }));
  // }, [dispatch, sortBy, navigate, searchParams]);
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

 

  return (
    <div className="px-20 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="mt-5">{ !isSuccess ? "No" : filteredVehicles?.length} Results</h1>
        <div className="flex flex-row gap-4 items-center">
          <h1>Sort By</h1>
          <select className="px-5 py-4 border border-blue-500 rounded-md text-lg font-semibold" onChange={(e)=>handleSelect(e.target.value)}>
          <option value="">Choose a Value</option>
           {sortBY.map((val)=>(
            <option value={val.value} key={val.id}>
              {val.value}
            </option>
           ))}
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

          
        </>
      )}
    </div>
  );
};

export default SearchResult;