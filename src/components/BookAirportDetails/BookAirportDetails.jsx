import Vehicle1 from "../../assets/images/vehicles/1.png";
import Vehicle2 from "../../assets/images/vehicles/2.png";
import Vehicle3 from "../../assets/images/vehicles/3.png";
import Vehicle4 from "../../assets/images/vehicles/4.png";
import Vehicle5 from "../../assets/images/vehicles/5.png";
import Vehicle6 from "../../assets/images/vehicles/6.png";

const vehicles = [
  {
    id: 1,
    image: Vehicle1,
    name: "Express Shuttle",
    price: 3.21,
  },
  {
    id: 2,
    image: Vehicle2,
    name: "Taxi",
    price: 7.13,
  },
  {
    id: 3,
    image: Vehicle3,
    name: "VIP Car",
    price: 21.29,
  },
  {
    id: 4,
    image: Vehicle4,
    name: "Minivan",
    price: 11.86,
  },
  {
    id: 5,
    image: Vehicle5,
    name: "WAV",
    price: 35.88,
  },
  {
    id: 6,
    image: Vehicle6,
    name: "Coach",
    price: 76.17,
  },
];

const BookAirportDetails = () => {
  return (
    <div className="flex items-center justify-center  w-full bg-opacity-50 py-12 space-y-6">
      <div className="text-center ">
        <div className="">
          <span className="bg-gradient-to-l from-teal-200 to-lime-400 bg-clip-text text-transparent font-bold uppercase text-2xl tracking-widest">
            BOOK AIRPORT TRANSFERS UAE
          </span>
        </div>

        <div className="flex items-center justify-center mt-4 mb-6 py-6">
          <div className="w-[50%]  ">
            <span className="text-black  uppercase text-md ">
              Book your airport transfer and get where you are going fast.
              Private cards,shuttles, shared vans and luxurary limousines are
              standing by. Compare transport options to andfrom your airport.
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-200 to-lime-100">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 p-12">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="">
                <div className="">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full "
                  />
                  <h3 className="font-semibold text-sm text-black">
                    {vehicle.name}
                  </h3>

                  <h5 className="">
                    from
                    <span className="from-teal-200 to-lime-400 bg-clip-text text-primary font-bold uppercase text-sm tracking-widest">
                      {vehicle.price}£
                    </span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAirportDetails;
