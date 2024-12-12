import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { TbCircleArrowRight } from "react-icons/tb";
import LearnMoreModal from "./LearnMoreModal";
 

const VehicleCard = ({ key , vehicle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  const handleSelect = (vehicle) => {
    navigate(`/vehicle-details`, { state: { vehicle } }); // Pass vehicle data through state
  };

  return (
    <div>
      <div key={vehicle._id} className="rounded-md mt-6 bg-blue-200">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_auto]">
          <div>
            <div className="flex flex-row px-6 py-2">
              <img
                src={vehicle?.images[0]?.secure_url}
                alt="Vehicle"
                className="w-36 h-28"
              />

              <div className="flex flex-col gap-6 px-6 py-6">
                <h1 className="text-xl font-semibold">
                  {vehicle?.vehicleName}
                </h1>

                <div className="flex flex-row gap-6">
                  <h1>{vehicle?.ratings?.averageRating} ★</h1>
                  <h1>{vehicle?.ratings?.numberOfRatings} Reviews</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-5 px-6 py-2">
              {[
                vehicle?.vehicleType,
                vehicle?.vehicleClass,
                vehicle?.serviceType,
              ].map((tag, index) => (
                <div className="px-1 py-1 bg-gray-200 rounded-md" key={index}>
                  <h1 className="text-sm">{tag}</h1>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <hr className="mt-2 w-[90%]" />
            </div>

            <div className="mt-3 px-6 py-2 flex flex-row gap-4 text-white">
              <TbCircleArrowRight size="24" />
              <button onClick={openModal}> Learn More </button>
            </div>

            <LearnMoreModal
              data={vehicle}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>

          <div className="bg-blue-900 flex flex-col items-center justify-start">
            <h1 className="text-blue-400 mt-6">Tour Description</h1>
            <div className="mt-6 flex items-start justify-start gap-1">
              <span className="text-white text-2xl">₹</span>
              <span className="text-5xl text-white">{vehicle?.price}</span>
            </div>

            <button
              className="px-6 py-2 border-2 border-white text-white mt-6 rounded-md flex flex-row gap-3"
              onClick={() => handleSelect(vehicle)} // Pass the entire vehicle object
            >
              <span> SELECT </span>
              <TbCircleArrowRight size="24" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
