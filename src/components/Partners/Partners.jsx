import Marquee from "react-fast-marquee";
import Image1 from "../../assets/images/partners/1.png";
import Image2 from "../../assets/images/partners/2.png";
import Image3 from "../../assets/images/partners/3.png";
import Image4 from "../../assets/images/partners/4.png";
import Image5 from "../../assets/images/partners/5.png";
import Image6 from "../../assets/images/partners/6.png";

const items = [
  {
    id: 1,
    logo: Image3,
  },

  {
    id: 2,
    logo: Image5,
  },
  {
    id: 3,
    logo: Image4,
  },
  {
    id: 4,
    logo: Image2,
  },
  {
    id: 5,
    logo: Image6,
  },

  {
    id: 6,
    logo: Image1,
  },
];

const Partners = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <Marquee pauseOnClick={true} speed={300} direction="left">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
              {items.map((item) => (
                <img
                  key={item.id}
                  src={item.logo}
                  className="max-w-[200px] h-[100px] ml-5 mr-5 shadow-[0_0_10px_bg-black] "
                />
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Partners;
