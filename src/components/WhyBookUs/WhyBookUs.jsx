import Easy from "../../assets/images/features/Easy.png";
import Hand from "../../assets/images/features/Hand.png";
import Secure from "../../assets/images/features/Secure.png";

import Relax from "../../assets/images/features/Relax.png";
import Connect from "../../assets/images/features/Connect.png";
import Book from "../../assets/images/features/Book.png";
import Compare from "../../assets/images/features/Compare.png";

const features = [
  {
    id: 1,
    image: Secure,
    name: "Safe",
  },
  {
    id: 2,
    image: Hand,
    name: "Reliable",
  },
  {
    id: 3,
    image: Easy,
    name: "Easy",
  },
];

const featureDetails = [
  {
    id: 1,
    image: Compare,
    name: "Compare",
    description:
      "Choose your rides. Limos, shared vans and everything in between",
  },
  {
    id: 2,
    image: Book,
    name: "Book",
    description:
      "Instant Bookings. Easy meeting instructions for on-time pickup.",
  },
  {
    id: 3,
    image: Connect,
    name: "Connect",
    description: "Driver Contact. Details to stay in touch when you arrive.",
  },
  {
    id: 4,
    image: Relax,
    name: "Relax",
    description: "Enjoy the ride. No meter. No currency exchange. No surprise.",
  },
];

const WhyBookUs = () => {
  return (
    <div className="bg-white w-full bg-opacity-50 py-12 ">
      <div className="text-center">
        <div data-aos="fade-up" data-aos-delay="200" className="">
          <span className="bg-gradient-to-l from-teal-200 to-lime-400 bg-clip-text text-transparent font-bold uppercase text-2xl tracking-widest">
            WHY BOOK WITH US
          </span>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex items-center justify-center mt-4 mb-6"
        >
          <div className="w-[50%]">
            <span className="text-black  uppercase text-md ">
              Get to and from airport with no fuss. Compare, choose and book a
              reliable transport service. GreetGuests global reach gets you
              where you need to be.
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex items-center justify-evenly "
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" grid grid-cols-1 items-center justify-evenly mt-8"
            >
              <div className="">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full "
                />
                <h3 className="font-semibold text-sm text-black mt-4 mb-8">
                  {feature.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-200 to-lime-100">
          <div className="grid grid-cols-2 lg:grid-cols-4  flex-row items-center justify-evenly py-6">
            {featureDetails.map((featureDetail) => (
              <div
                key={featureDetail.id}
                className=" items-center justify-center mt-8"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src={featureDetail.image}
                    alt={featureDetail.name}
                    className="w-[40px] h-[40px]"
                  />
                  <h3
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="font-semibold text-sm text-black py-3"
                  >
                    {featureDetail.name}
                  </h3>

                  <span
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="text-black text-sm text-wrap mt-4 w-[60%]"
                  >
                    {featureDetail.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBookUs;
