/* eslint-disable react/prop-types */
import React from "react";
import { CiCircleInfo } from "react-icons/ci";

const ModalDescription = ({ data }) => {
  return (
    <div>
      <h1> This Transport Service</h1>

      <p>
        {" "}
        Private :{" "}
        {data.private
          ? "Is a private car, suv, van or vehicle. This service is faster and more comfartable than a shared service and is door-to-door with no stops."
          : " Is a shared service and will other passengers as well and will stop on multiple stops."}
      </p>
      <h1 className=""> Vehicle {data.vehicle}</h1>

      <h1 className=""> Class : {data.class} </h1>

      <h1 className="">
        Luggage : Has capacity for {data?.maxLuggageCapacity?.checkedLuggage}{" "}
        item of checked luggage and {data?.maxLuggageCapacity?.handLuggage} item
        of hand luggage per person.
      </h1>

      <h1>
        Cancellation : May be cancelled for free up to {data.cancellationTime}
        hours before travel.
      </h1>

      <h3>Included at no extra cost</h3>

      <h3>
        {" "}
        Fees & Taxes:{" "}
        {data.feesIncluded
          ? "All applicable fees and taxes are included (you can still tip if you want)"
          : "All applicable fees and taxes are not included"}
      </h3>

      <h3>
        Meet & Greet:
        {data.meetngreet
          ? "Meet and greet is available. Your driver will meet you in the terminal holding a sign and escort you to your ride."
          : "Meet n Greet not available"}
      </h3>

      <h1 className="text-gray-900 text-xl font-thin"> Extra </h1>

      <div className="flex flex-row gap-4 items-center justify-center -mt-8">
        <CiCircleInfo className="text-blue-400" size={200} />
        <p className="text-blue-400 font-semibold text-sm">{data.extraInfo}</p>
      </div>
    </div>
  );
};

export default ModalDescription;
