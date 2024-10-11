import CalendarIcon from "../../assets/images/calendar.png";
import AirplaneIcon from "../../assets/images/airplane.png";
import LocationIcon from "../../assets/images/location.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="  ">
      <div className="flex items-center justify-center  bg-opacity-50 py-12">
        <div className="container  mx-auto">
          <div className="mx-auto text-center">
            <div data-aos="fade-up">
              <span className="text-black font-bold uppercase text-5xl tracking-widest">
                BOOK YOUR RIDES
              </span>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <span className="text-black font-bold uppercase text-5xl tracking-widest">
                ALL OVER UAE
              </span>
            </div>
            <h2
              data-aos="fade-right"
              className="mt-8 mb-6 text-xl lg:text-2xl font-bold text-black"
            >
              #Exploring the World With Greet Guest Tourism
            </h2>

            <div
              data-aos="fade-down"
              className="space-y-4 px-4 bg-primary rounded-md p-[5px] relative w-[98%] items-center justify-center"
            >
              <div className="py-2 gap-2 flex lg:flex-row flex-col md:items-center">
                <div className="flex flex-row">
                  <div className="rounded-full relative md:items-center justify-center">
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Arrival Airport"
                      className="rounded-s-lg w-[90%]  h-[50px] pl-[50px]"
                    />

                    <img
                      src={AirplaneIcon}
                      alt="airplane"
                      className="absolute inset-y-1 left-8 top-3"
                    />
                  </div>

                  <div className="rounded-full relative ">
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Location"
                      className="rounded-e-lg w-[90%] h-[50px] pl-[50px]"
                    />

                    <img
                      src={LocationIcon}
                      alt="location"
                      className="absolute inset-y-1 left-8 top-3"
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <div className="rounded-full relative">
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Date"
                      className="rounded-lg w-[90%] h-[50px] pl-[50px]"
                    />

                    <img
                      src={CalendarIcon}
                      alt="calendar"
                      className="absolute inset-y-1 left-8 top-3"
                    />
                  </div>

                  <div className="rounded-full relative gap-2">
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Return Date"
                      className="rounded-lg w-[90%] h-[50px] pl-[50px]"
                    />

                    <img
                      src={CalendarIcon}
                      alt="calendar"
                      className="absolute inset-y-1 left-8 top-3"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center  ">
                  <button
                    onClick={() => navigate("/vehicles")}
                    className="uppercase bg-green-500 hover:bg-green-300 text-white text-md font-bold py-2 px-4  rounded-md"
                    style={{
                      boxShadow:
                        " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div
              data-aos="flip-left"
              className="space-y-4 items-center justify-center mt-10"
            >
              <a
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                className="w-auto md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
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

export default Hero;

// grid grid-cols md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-5
