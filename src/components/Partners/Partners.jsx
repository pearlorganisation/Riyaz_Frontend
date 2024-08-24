import React from "react";
import Image1 from "../../assets/images/partners/1.png";
import Image2 from "../../assets/images/partners/2.png";
import Image3 from "../../assets/images/partners/3.png";
import Image4 from "../../assets/images/partners/4.png";
import Image5 from "../../assets/images/partners/5.png";
import Image6 from "../../assets/images/partners/6.png";

const Partners = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
            <a href="#" className="flex justify-center items-center">
              <img src={Image3} alt="1" />
            </a>

            <a href="#" className="flex justify-center items-center">
              <img src={Image5} alt="1" />
            </a>

            <a href="#" className="flex justify-center items-center">
              <img src={Image4} alt="1" />
            </a>

            <a href="#" className="flex justify-center items-center">
              <img src={Image2} alt="1" />
            </a>

            <a href="#" className="flex justify-center items-center">
              <img src={Image6} alt="1" />
            </a>

            <a href="#" className="flex justify-center items-center">
              <img src={Image1} alt="1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
