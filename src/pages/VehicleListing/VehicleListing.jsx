import SearchResult from "../../components/SearchResult/SearchResult";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import { GoArrowSwitch } from "react-icons/go";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getVehicles } from "../../features/actions/vehicleAction";
import { useLocation, useNavigate } from "react-router-dom";
 

const VehicleListing = () => {
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  /** sort by query is */
 
 
  return (
    <div>
      <div className="static z-10">
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 max-w-max bg-opacity-90 bg-blue-300 rounded-xl text-white z-30">
          <SearchUpdate setDate={setDate} setReturnDate={setReturnDate} />
        </div>

        {/* Map Section */}
        <div className="w-full h-[65vh] bg-red-400 z-10">
          <h1 className="bg-white">Map</h1>
        </div>

        {/* Sidebar and Search Results */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_auto] gap-8 mt-20">
          <SidebarFilter  />
          <SearchResult date={date} returnDate={returnDate}  />
        </div>
      </div>
    </div>
  );
};

export default VehicleListing;

/*------------------------------------------------------handle for selecting date----------------------------------------------------------- */
const SearchUpdate = ({ setDate, setReturnDate }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const pickup = watch("pickupLocation");
  const dropLocation = watch("destination");

  console.log('------------------pickup and droploaction', pickup, dropLocation)
  useEffect(() => {
    setPickupLocation(pickup);
    setDestination(dropLocation);
  }, [pickup, dropLocation]);

  const submitForm = (data) => {
    const searchParams = new URLSearchParams();
    if (pickupLocation) searchParams.append("pickupLocation", pickupLocation);
    if (destination) searchParams.append("destination", destination);

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    }, { replace: true });

    // Dispatch the getVehicles action after updating the searchParams
    dispatch(getVehicles(searchParams))
    .then(
      setPickupLocation(""),
      setDestination("")
    );
  };
  return (
    <div> <form onSubmit={handleSubmit(submitForm)} className="p-4 space-y-4 w-full max-w-full h-full">
      {/* Row 1: From and To Fields */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-full max-h-max">
        {/* From Field */}
        <div className="flex-grow w-full max-w-full sm:w-auto">
          <label className="block mb-2">Pickup Location</label>
          <div className="flex items-center bg-white text-black p-2 rounded max-w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 20a9.997 9.997 0 007.418-3.09 10 10 0 10-14.836 0A9.997 9.997 0 0010 20zm0-18a8 8 0 11-6.627 12.166A8.045 8.045 0 0110 2zM9 7h2v6H9V7zm1 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
            </svg>
            <input
              type="text"
             
              {...register("pickupLocation")}
              placeholder="Enter an airport name or code"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Switch Arrow */}
        <div className="w-auto mt-4 sm:mt-8">
          <div className="flex items-center bg-white text-black p-2 rounded max-w-max">
            <GoArrowSwitch />
          </div>
        </div>

        {/* To Field */}
        <div className="flex-grow w-full max-w-full sm:w-auto">
          <label className="block mb-2">Destination</label>
          <div className="flex items-center bg-white text-black p-2 rounded max-w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.707 14.707a1 1 0 01-1.414 0L4.586 11l-.293.293a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0L5 7.586l3.293-3.293a1 1 0 011.414 1.414L7.414 9l3.293 3.293a1 1 0 010 1.414z" />
            </svg>
            <input
              type="text"
              placeholder="Enter an address or hotel"
              {...register("destination")}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Flight Arrival, Passengers, and Return Date */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-full">
        {/* Pickup Date */}
        {/* <div className="flex-grow w-full max-w-full sm:w-auto">
          <label className="block mb-2">Pickup Date</label>
          <div className="flex items-center bg-white text-black p-2 rounded max-w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 000 2h8a1 1 0 000-2H6zM4 4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm6 12a5 5 0 100-10 5 5 0 000 10z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="date"
              className="w-full bg-transparent focus:outline-none"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div> */}

        {/* Time Field */}
        {/* <div className="flex-grow w-full max-w-full sm:w-auto">
          <div className="flex items-center bg-white text-black p-2 mt-4 sm:mt-8 rounded max-w-full">
            <input
              type="time"
              className="w-full bg-transparent focus:outline-none"
              value="17:10"
            />
          </div>
        </div> */}

        {/* Return Date */}
        {/* <div className="flex-grow w-full max-w-full sm:w-auto">
          <label className="block mb-2 text-nowrap">Return Date</label>
          <div className="flex items-center bg-white text-black p-2 rounded max-w-full">
            <input
              type="date"
              className="w-full bg-transparent focus:outline-none"
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div> */}

        {/* Return Time */}
        <div className="flex-grow w-full max-w-full sm:w-auto">
          <div className="flex items-center bg-white text-black p-2 mt-4 sm:mt-8 rounded max-w-full">
            <input
              type="time"
              className="w-full bg-transparent focus:outline-none"
              value="17:10"
            />
          </div>
        </div>

      </div>
      {/* Update Button */}
      <div className="w-full sm:w-auto">
        <button
          type="submit"
          className="bg-gray-500 px-6 py-2 mt-4 sm:mt-8 rounded text-white cursor-pointer opacity-80"
        >
          Update
        </button>
      </div>
     
    </form></div>
    
  );
};


 



 