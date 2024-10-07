import React from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

import VehicleCard from "./VehicleCard";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const vehiclesData = [
  {
    sedans: [
      {
        id: 1,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-sedan.png",
        name: " Rashid Hussain Passenger Transport",
        vehicle: "Sedan",
        private: true,
        class: "Economy",
        tags: ["PRIVATE", "ECONOMY", "SEDAN", "MEET N GREET"],
        ratings: 3.5,
        reviews: 65,
        tour: "ONE WAY",
        price: "1757.55",
        maxPassengerCapacity: 4,
        maxLuggageCapacity: {
          checkedLuggage: 1,
          handLuggage: 1,
        },
        cancellationTime: 48,
        meetngreet: true,
        extraInfo:
          "Extras such as child seats and extra luggage may be available. These may attract an additional cost that would need to be paid to the transport company directly. Please request these extras when booking and your transport company will respond with their availabilities and rates.",
        feesIncluded: true,
        availableFrom: "2024-10-10",
        availableTo: "2024-10-20",
      },
      {
        id: 2,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-sedan.png",
        name: "Leo Tours",
        tags: ["PRIVATE", "ECONOMY", "SEDAN", "MEET N GREET"],
        ratings: 4,
        reviews: 17,
        tour: "ONE WAY",
        price: "2176.01",
        maxCapacity: 4,
        availableFrom: "2024-10-05",
        availableTo: "2024-10-15",
      },
      {
        id: 3,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-sedan.png",
        name: "Adventure Shock Tourisms LLC",
        tags: ["PRIVATE", "ECONOMY", "SEDAN", "MEET N GREET"],
        ratings: 4.5,
        reviews: 9,
        tour: "ONE WAY",
        price: "2343.40",
        maxCapacity: 4,
        availableFrom: "2024-10-12",
        availableTo: "2024-10-22",
      },
      {
        id: 4,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-sedan.png",
        name: "Yam Tourism",
        tags: ["PRIVATE", "ECONOMY", "SUV OR SIMILAR", "MEET N GREET"],
        ratings: 3,
        reviews: 6,
        tour: "ONE WAY",
        price: "2510.17",
        maxCapacity: 4,
        availableFrom: "2024-10-01",
        availableTo: "2024-10-10",
      },
      {
        id: 5,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-business-sedan.png",
        name: "Quick and Safe Limousine LLC",
        tags: ["PRIVATE", "ECONOMY", "SEDAN", "MEET N GREET"],
        ratings: 5,
        reviews: 50,
        tour: "ONE WAY",
        price: "3012.95",
        maxCapacity: 4,
        availableFrom: "2024-10-11",
        availableTo: "2024-10-25",
      },
    ],
  },
  {
    suvs: [
      {
        id: 1,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-suv.png",
        name: " Rashid Hussain Passenger Transport",
        tags: ["PRIVATE", "ECONOMY", "SUV OR SIMILAR", "MEET N GREET"],
        ratings: 3.5,
        reviews: 65,
        tour: "ONE WAY",
        price: "2594.48",
        maxCapacity: 8,
        availableFrom: "2024-10-10",
        availableTo: "2024-10-20",
      },
      {
        id: 2,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-suv.png",
        name: "Adventure Shock Tourisms LLC",
        tags: ["PRIVATE", "ECONOMY", "SUV OR SIMILAR", "MEET N GREET"],
        ratings: 4.5,
        reviews: 9,
        tour: "ONE WAY",
        price: "2929.25",
        maxCapacity: 8,
        availableFrom: "2024-10-12",
        availableTo: "2024-10-22",
      },
      {
        id: 3,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-suv.png",
        name: "Leo Tours",
        tags: ["PRIVATE", "ECONOMY", "SUV OR SIMILAR", "MEET N GREET"],
        ratings: 4,
        reviews: 17,
        tour: "ONE WAY",
        price: "3180.33",
        maxCapacity: 8,
        availableFrom: "2024-10-05",
        availableTo: "2024-10-15",
      },
      {
        id: 4,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-suv.png",
        name: "Car Easy Go",
        tags: ["PRIVATE", "ECONOMY", "SUV OR SIMILAR", "MEET N GREET"],
        ratings: 4.5,
        reviews: 300,
        tour: "ONE WAY",
        price: "3347.72",
        maxCapacity: 8,
        availableFrom: "2024-10-08",
        availableTo: "2024-10-18",
      },
      {
        id: 5,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-suv.png",
        name: "Royal Paradise",
        tags: ["PRIVATE", "ECONOMY", "SUV OR SIMILAR", "MEET N GREET"],
        ratings: 3.5,
        reviews: 14,
        tour: "ONE WAY",
        price: "3497.83",
        maxCapacity: 8,
        availableFrom: "2024-10-09",
        availableTo: "2024-10-19",
      },
    ],
  },
  {
    vans: [
      {
        id: 1,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-van.png",
        name: " Rashid Hussain Passenger Transport",
        tags: ["PRIVATE", "ECONOMY", "VAN", "MEET N GREET"],
        ratings: 3.5,
        reviews: 65,
        tour: "ONE WAY",
        price: "2594.55",
        maxCapacity: 15,
        availableFrom: "2024-10-10",
        availableTo: "2024-10-20",
      },
      {
        id: 2,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-van.png",
        name: "Leo Tours",
        tags: ["PRIVATE", "ECONOMY", "VAN", "MEET N GREET"],
        ratings: 4,
        reviews: 17,
        tour: "ONE WAY",
        price: "2929.01",
        maxCapacity: 15,
        availableFrom: "2024-10-05",
        availableTo: "2024-10-15",
      },
      {
        id: 3,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-van.png",
        name: "Adventure Shock Tourisms LLC",
        tags: ["PRIVATE", "ECONOMY", "VAN", "MEET N GREET"],
        ratings: 4.5,
        reviews: 9,
        tour: "ONE WAY",
        price: "3180.40",
        maxCapacity: 15,
        availableFrom: "2024-10-12",
        availableTo: "2024-10-22",
      },
      {
        id: 4,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-van.png",
        name: "Royal Paradise",
        tags: ["PRIVATE", "ECONOMY", "VAN", "MEET N GREET"],
        ratings: 3,
        reviews: 6,
        tour: "ONE WAY",
        price: "3264.17",
        maxCapacity: 15,
        availableFrom: "2024-10-01",
        availableTo: "2024-10-10",
      },
      {
        id: 5,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-van.png",
        name: "KOI Technologies FZO",
        tags: ["PRIVATE", "ECONOMY", "VAN", "MEET N GREET"],
        ratings: 5,
        reviews: 50,
        tour: "ONE WAY",
        price: "3680.95",
        maxCapacity: 15,
        availableFrom: "2024-10-11",
        availableTo: "2024-10-25",
      },
    ],
  },
  {
    buses: [
      {
        id: 1,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-bus.png",
        name: " Rashid Hussain Passenger Transport",
        tags: ["PRIVATE", "ECONOMY", "BUS", "MEET N GREET"],
        ratings: 3.5,
        reviews: 65,
        tour: "ONE WAY",
        price: "2594.48",
        maxCapacity: 35,
        availableFrom: "2024-10-10",
        availableTo: "2024-10-20",
      },
      {
        id: 2,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-bus.png",
        name: "Adventure Shock Tourisms LLC",
        tags: ["PRIVATE", "ECONOMY", "BUS", "MEET N GREET"],
        ratings: 4.5,
        reviews: 9,
        tour: "ONE WAY",
        price: "2929.25",
        maxCapacity: 35,
        availableFrom: "2024-10-12",
        availableTo: "2024-10-22",
      },
      {
        id: 3,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-bus.png",
        name: "Leo Tours",
        tags: ["PRIVATE", "ECONOMY", "BUS", "MEET N GREET"],
        ratings: 4,
        reviews: 17,
        tour: "ONE WAY",
        price: "3180.33",
        maxCapacity: 35,
        availableFrom: "2024-10-05",
        availableTo: "2024-10-15",
      },
      {
        id: 4,
        image:
          "https://d1lk4k9zl9klra.cloudfront.net/web/dotcom/vehicle/370x300/car-economy-bus.png",
        name: "Car Easy Go",
        tags: ["PRIVATE", "ECONOMY", "BUS", "MEET N GREET"],
        ratings: 4.5,
        reviews: 300,
        tour: "ONE WAY",
        price: "3347.72",
        maxCapacity: 35,
        availableFrom: "2024-10-08",
        availableTo: "2024-10-18",
      },
    ],
  },
];

const SearchResult = ({ selectedVehicleTypes, date, returnDate }) => {
  const vehicleMapping = {
    sedan: vehiclesData[0].sedans,
    suv: vehiclesData[1].suvs,
    van: vehiclesData[2].vans,
    bus: vehiclesData[3].buses,
  };

  // If no vehicle types are selected, include all types for filtering
  const allVehicleTypes = selectedVehicleTypes.length
    ? selectedVehicleTypes
    : ["sedan", "suv", "van", "bus"];

  // Filter vehicles based on availability and selected types or date range
  const filteredVehicles = allVehicleTypes.flatMap((type) => {
    const vehicles = vehicleMapping[type];
    return vehicles
      ? vehicles.filter((vehicle) => {
        const availableFrom = new Date(vehicle.availableFrom);
        const availableTo = new Date(vehicle.availableTo);
        const selectedStartDate = new Date(date);
        const selectedEndDate = new Date(returnDate);

        // Check if the vehicle is available within the selected date range
        return (
          (availableFrom <= selectedEndDate && availableTo >= selectedStartDate)
        );
      })
      : [];
  });

  console.log(filteredVehicles, "filtered vehi")

  return (
    <div className="px-20 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="mt-5">{filteredVehicles.length} Results </h1>

        <div className="flex flex-row gap-4 items-center">
          <h1 className=""> Sort By </h1>
          <div className="flex flex-row gap-4">
            <select
              className="px-5 py-4 border border-blue-500 rounded-md text-lg font-semibold"
              defaultValue="vh-lp"
            >
              {/* Sort options */}
              <option value="price-lth">Pricing - Low to High</option>
              <option value="price-htl">Pricing - High to Low</option>
              <option value="rating-h">Rating - Highest</option>
              <option value="rating-l">Rating - Lowest</option>
              <option value="vh-hp">Vehicle - Highest Price</option>
              <option value="vh-lp">Vehicle - Lowest Price</option>
            </select>
          </div>
        </div>
      </div>

      {filteredVehicles.length === 0 ? (
        <h2>No vehicles found for the selected types or date range.</h2>
      ) : (
        filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))
      )}
    </div>
  );
};

export default SearchResult;


 