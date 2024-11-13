import React from "react";
import { useLocation } from "react-router-dom";
import { TbCircleArrowRight } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsRecordCircle } from "react-icons/bs";
import { RiRefund2Fill } from "react-icons/ri"; 
import { CiLock } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
 

const VehicleDetails = () => {
  const location = useLocation();
  //user vehicle?.price for payment
  const { vehicle } = location.state;  // Access the vehicle data from state

  if (!vehicle) {
    return <div>No vehicle details found!</div>;  // Fallback if no data is passed
  }

  return (
    <div> 
      <div className="flex justify-center items-center mt-10">
        {/* Car Details Card */}
        <div className="flex flex-col lg:flex-row items-stretch lg:w-3/5 w-full sm:m-2  rounded-lg shadow-md h-auto lg:h-56">

          {/* Left Section - Image and Details */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 bg-gray-100 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-4 lg:w-2/3">
            <div className="flex-shrink-0">
              <img
                src={vehicle?.images[0]?.secure_url}
                alt={vehicle?.vehicleName}
                className="w-24 h-16 lg:w-32 lg:h-24 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center w-full text-center lg:text-left">
              <h1 className="text-lg font-bold text-wrap">{vehicle?.vehicleName}</h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
                <span className="text-yellow-500">{vehicle?.ratings?.averageRating} ★</span>
                <span className="text-gray-500">{vehicle?.ratings?.numberOfRatings} reviews</span>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap justify-center lg:justify-start">
                {[vehicle?.vehicleType, vehicle?.vehicleClass, vehicle?.serviceType].map((tag, index) => (
                  <div className="px-2 py-1 bg-gray-200 rounded-md" key={index}>
                    <h1 className="text-sm">{tag}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Pricing and Learn More */}
          <div className="flex flex-col justify-center items-center bg-black text-white p-4 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none lg:w-1/3">
            <h3 className="text-blue-600 text-xs font-semibold text-center">ONE WAY</h3>
            <div className="flex items-baseline pt-3">
              <span className="text-2xl font-bold">₹{vehicle?.price}</span>
              <span className="text-xs text-gray-500 ml-1">.06</span>
            </div>
            
            <button className="mt-4 px-4 py-2 bg-blue-900 rounded-md flex items-center gap-2">
              <MdKeyboardArrowRight size="20" />
              <PaymentForm data={vehicle} />
            </button>
         
          </div>
        </div>
      </div>

    {/* this is the div below the div which contains car details card */}
    <div className="bg-gray-200 mt-4 ">
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-5/12 mb-3 mt-12">
                <div className="pl-2 pr-2 flex flex-col">
                  <h1 className="pt-4 text-3xl font-light pl-4">Transfer Details</h1>
                    <div className="flex flex-row justify-between pl-5 pr-5">
                      <div className="w-1/2 flex flex-col mb-2">
                         <div className="mt-3">
                           <h1 className="font-semibold">Pick-up</h1>
                           <span>{vehicle?.pickupLocation}</span>
                         </div>
                         <div className="mt-3"> 
                           <h1 className="font-semibold">Passengers</h1>
                           <span>1</span>
                         </div>  
                          <div className="mt-3">
                            <h1 className="font-semibold">
                              Date
                            </h1>
                          <span>{vehicle?.pickupDate}</span>
                          </div>
                      </div>
                      <div className="w-1/2 flex flex-col mb-2">
                        <div className="mt-3">
                           <h1 className="font-semibold">Drop-off</h1>
                      <span>{vehicle?.destination}</span>
                         </div>
                         <div className="mt-3">
                           <h1 className="font-semibold">Luggage</h1>
                           <span>1 carry-on & 1 check-in bag included</span>
                         </div>  
                         <div className="mt-3">
                           <h1 className="font-semibold">Flight Arrival Time</h1>
                           <span>17:10 (5:10 PM)</span>
                         </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center mb-3">
                     <MdKeyboardArrowLeft size={40} /> <span className="text-xl">Cancel and Start Again</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
