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

        tags: ["PRIVATE", "ECONOMY", "SEDAN", "MEET N GREET"],
        ratings: 3.5,
        reviews: 65,
        tour: "ONE WAY",
        price: "1757.55",
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
      },
    ],
  },
];

const SearchResult = () => {
  return (
    <div className="px-20 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="mt-5">50 Results </h1>

        <div className="flex flex-row gap-4 items-center">
          <h1 className=""> Sort By </h1>

          <div className="flex flex-row gap-4">
            <select
              className="px-5 py-4 border border-blue-500 rounded-md text-lg font-semibold"
              defaultValue="vh-lp"
            >
              <option value="text-lg price-lth">
                <FaArrowRightArrowLeft className="w-8 h-8" /> Pricing - Low to
                Low{" "}
              </option>
              <option value="text-lg price-htl">
                <FaArrowRightArrowLeft className="w-8 h-8" /> Pricing - High to
                Low{" "}
              </option>
              <option value="text-lg rating-h">
                <FaArrowRightArrowLeft className="w-8 h-8" /> Rating - Highest{" "}
              </option>
              <option value="text-lg rating-l">
                <FaArrowRightArrowLeft className="w-8 h-8" /> Rating - Lowest{" "}
              </option>
              <option value="text-lg vh-hp">
                <FaArrowRightArrowLeft className="w-8 h-8" /> Vehicle - Highest
                Price{" "}
              </option>
              <option value="text-lg vh-lp relative ">
                <FaArrowRightArrowLeft className="w-8 h-8 absolute top-2 left-2" />
                <span>Vehicle - Lowest</span>
                Price{" "}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-5xl font-medium"> Sedans </h1>

        {vehiclesData[0].sedans.map((sedan) => (
          <VehicleCard key={sedan.id} vehicle={sedan} />
        ))}

        <div className="flex items-center justify-center mt-8">
          <button className="px-6 py-2 border border-black text-blue-950 font-bold text-4xl rounded-md flex flex-row gap-2">
            <span>See 15 More Sedans</span>
            <BiArrowToBottom />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-5xl font-medium"> SUVS </h1>

        {vehiclesData[1].suvs.map((suv) => (
          <VehicleCard key={suv.id} vehicle={suv} />
        ))}

        <div className="flex items-center justify-center mt-8">
          <button className="px-6 py-2 border border-black text-blue-950 font-bold text-4xl rounded-md flex flex-row gap-2">
            <span>See 7 More SUVs</span>
            <BiArrowToBottom />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-5xl font-medium"> VANS </h1>

        {vehiclesData[2].vans.map((van) => (
          <VehicleCard key={van.id} vehicle={van} />
        ))}

        <div className="flex items-center justify-center mt-8">
          <button className="px-6 py-2 border border-black text-blue-950 font-bold text-4xl rounded-md flex flex-row gap-2">
            <span>See 9 More VANS</span>
            <BiArrowToBottom />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-5xl font-medium"> BUSES </h1>

        {vehiclesData[3].buses.map((bus) => (
          <VehicleCard key={bus.id} vehicle={bus} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
