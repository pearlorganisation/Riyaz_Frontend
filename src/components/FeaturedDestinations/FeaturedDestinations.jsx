import Dubai from "../../assets/images/Dubai.png";

const blogsData = [
  {
    id: 1,
    image: Dubai,
    title: "Dubai : Desert Safari",
    description:
      "Enjoy a breathtaking session of dune bashing at the Red Dunes. Slide along the dunes by trying out the sport of sandboarding. Get an amazing view of the desert on the camel.",
    isSale: true,
  },
  {
    id: 2,
    image: Dubai,
    title: "Dubai : Desert Safari",
    description:
      "Enjoy a breathtaking session of dune bashing at the Red Dunes. Slide along the dunes by trying out the sport of sandboarding. Get an amazing view of the desert on the camel.",
    isSale: true,
  },
  {
    id: 3,
    image: Dubai,
    title: "Dubai : Desert Safari",
    description:
      "Enjoy a breathtaking session of dune bashing at the Red Dunes. Slide along the dunes by trying out the sport of sandboarding. Get an amazing view of the desert on the camel.",
    isSale: true,
  },
  {
    id: 4,
    image: Dubai,
    title: "Dubai : Desert Safari",
    description:
      "Enjoy a breathtaking session of dune bashing at the Red Dunes. Slide along the dunes by trying out the sport of sandboarding. Get an amazing view of the desert on the camel.",
    isSale: true,
  },
  {
    id: 5,
    image: Dubai,
    title: "Dubai : Desert Safari",
    description:
      "Enjoy a breathtaking session of dune bashing at the Red Dunes. Slide along the dunes by trying out the sport of sandboarding. Get an amazing view of the desert on the camel.",
    isSale: true,
  },
  {
    id: 6,
    image: Dubai,
    title: "Dubai : Desert Safari",
    description:
      "Enjoy a breathtaking session of dune bashing at the Red Dunes. Slide along the dunes by trying out the sport of sandboarding. Get an amazing view of the desert on the camel.",
    isSale: true,
  },
];

const FeaturedDestinations = () => {
  return (
    <div className="font-[sans-serif] lg:max-w-full md:max-w-full  bg-white w-full mt-8">
      <div className="flex items-center justify-center md:px-0 px-4">
        <h2 className="text-4xl  mb-12 bg-gradient-to-l from-teal-200 to-lime-400 bg-clip-text text-transparent font-bold uppercase  tracking-widest ">
          Featured Destinations
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-teal-200 to-lime-100 py-16 px-10">
        {blogsData.map((blogs) => (
          <div
            key={blogs.id}
            className="bg-white  cursor-pointer hover:shadow-lg  rounded-md"
          >
            <div className="w-full  overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-4">
              <img
                src={blogs.image}
                alt={blogs.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {blogs.title}
                </h3>
                <h4 className="text-base text-gray-800  mt-4">
                  {blogs.description}
                </h4>

                <button
                  className="mt-2 mb-2 uppercase bg-green-500 hover:bg-green-300 text-white text-md font-bold py-2 px-4  rounded-md"
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  EXPLORE NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center  bg-gradient-to-r from-teal-200 to-lime-100">
        <a
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="w-auto md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
          href="#"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
