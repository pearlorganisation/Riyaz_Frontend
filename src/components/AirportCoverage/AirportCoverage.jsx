import React from "react";

import Car from "../../assets/images/features/Car.png";
import Country from "../../assets/images/features/Country.png";
import Airplane from "../../assets/images/features/Airplane.png";

const coverages = [
  {
    id: 1,
    image: Country,
    name: "United Arab Emirates",
  },
  {
    id: 2,
    image: Airplane,
    name: "5+ Airports",
  },
  {
    id: 3,
    image: Car,
    name: "50+ Transport Companies",
  },
];

const AirportCoverage = () => {
  return (
    <div className="bg-white w-full bg-opacity-50 py-6 ">
      <div className="text-center">
        <div className="">
          <span className="bg-gradient-to-l from-teal-200 to-lime-400 bg-clip-text text-transparent font-bold uppercase text-2xl tracking-widest">
            GREET GUEST'S AIRPORT COVERAGE
          </span>
        </div>

        <div className="bg-gradient-to-r from-teal-200 to-lime-100  mt-8">
          <div className="flex items-center justify-evenly ">
            {coverages.map((coverage) => (
              <div
                key={coverage.id}
                className="grid grid-cols items-center justify-center mt-8"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={coverage.image}
                    alt={coverage.name}
                    className="w-[60px] h-[60px] "
                  />
                  <h3 className="font-bold text-sm text-black py-3">
                    {coverage.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            className="uppercase bg-green-500 hover:bg-green-300 text-white text-md font-bold py-2 px-4  rounded-md"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirportCoverage;
