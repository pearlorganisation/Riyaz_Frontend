import React from "react";
import Tick from "../../assets/images/tick.png";

const features = [
  {
    id: 1,
    name: "Affordable",
  },
  {
    id: 2,
    name: "Comfortable Rides",
  },
  {
    id: 3,
    name: "Get Elevated",
  },
];

const Banner = () => {
  return (
    <div
      className="relative  bg-cover object-center bg-no-repeat  border-2"
      style={{
        background: "url('backgroundTemp.png'",
      }}
    >
      <div className="flex items-center justify-center   py-12 z-50">
        <div className="container  mx-auto">
          <div className="mx-auto">
            <div>
              <span className="text-black font-bold uppercase text-4xl tracking-widest">
                HURRY UP !!!
              </span>
            </div>
            <div>
              <span className="text-black font-semibold uppercase text-3xl tracking-widest">
                UPTO{" "}
                <sapn className="text-black font-bold uppercase text-3xl tracking-widest">
                  15%
                </sapn>{" "}
                OFF
              </span>
            </div>

            <div>
              <span className="text-black font-bold uppercase text-4xl tracking-widest">
                FIRST BOOKING
              </span>
            </div>
            <div>
              <span className="text-black font-bold uppercase text-4xl tracking-widest">
                DISCOUNTS !
              </span>
            </div>
            <div className="flex  items-center gap-2 mt-4 w-[40%]">
              {features.map((feature) => (
                <div className="flex items-center justify-center gap-2 ">
                  <img src={Tick} alt="tick" className="w-[10px] h-[10px]" />
                  <h4 className=" text-base lg:text-base font-bold text-black">
                    {feature.name}
                  </h4>
                </div>
              ))}
            </div>

            <div className="space-y-4 items-center justify-center mt-5">
              <a
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                href="#"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
