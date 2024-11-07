import { useState } from "react";
import { TbCircleArrowRight } from "react-icons/tb";
import ModalDescription from "../ModalDescription/ModalDescription";
import ModalReviews from "../ModalDescription/ModalReviews";
import ModalAbout from "../ModalDescription/ModalAbout";
/* eslint-disable react/prop-types */
const LearnMoreModal = ({ isOpen, onClose, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={`fixed mt-40 inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Learn More</h2>

        <div>
          <div className="grid grid-cols-2">
            <div className="bg-gray-200 flex flex-col items-center justify-center">
              <h1 className="text-blue-950 mt-6"> {data?.tour} </h1>
              <div className=" mt-4 mb-4 flex items-start justify-start gap-1">
                <span className="text-blue-950 text-2xl">₹</span>
                <span className="text-5xl text-blue-950"> {data?.price}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="mt-2 text-xl text-blue-950 font-bold text-wrap px-6">
                {data?.name}
              </h1>

              <button className="px-6 w-[80%] items-center justify-center py-2 border-2 border-white text-white bg-blue-950 mt-3 rounded-md flex flex-row gap-3">
                <span> SELECT </span>
                <TbCircleArrowRight size="24" />
              </button>
            </div>
          </div>

          <h1 className="mx-4">TAGS </h1>
          <div className="flex flex-row gap-4 mt-2">
            {data?.tags?.map((tag, index) => (
              <div
                key={index}
                className="px-2 py-2 border-blue-950 border rounded-md"
              >
                <h1 className="text-xs">{tag}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-8">
          <button
            onClick={() => setActiveIndex(0)}
            className={`${
              activeIndex == 0 ? "border-t-4 border-blue-400" : ""
            } pt-3`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveIndex(1)}
            className={`${
              activeIndex == 1 ? "border-t-4 border-blue-400" : ""
            } pt-3`}
          >
            Reviews
          </button>

          <button
            onClick={() => setActiveIndex(2)}
            className={`${
              activeIndex == 2 ? "border-t-4 border-blue-400" : ""
            } pt-3`}
          >
            About Us
          </button>
        </div>

        {activeIndex == 0 && (
          <div className="mt-3">
            <ModalDescription data={data} />
          </div>
        )}

        {activeIndex == 1 && (
          <div className="mt-3">
            <ModalReviews data={data} />
          </div>
        )}

        {activeIndex == 2 && (
          <div className="mt-3">
            <ModalAbout data={data} />
          </div>
        )}

        <div className="w-full h-80 rounded-md bg-gray-200 flex items-center justify-center overflow-hidden mt-8">
          <img
            src={data?.image}
            alt="Vehicle"
            className="w-[80%] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;

{
  /*   
  
  
  */
}
