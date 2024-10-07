import React from "react";
import { useState } from "react";
const typesData = [
  {
    id: 1,
    name: "Shared",
    disabled: true,
  },
  {
    id: 2,
    name: "Private",
    disabled: false,
  },
  {
    id: 3,
    name: "Rideshare",
    disabled: true,
  },
];

const vehiclesData = [
  {
    id: 1,
    name: "Sedan",
    disabled: false,
  },
  {
    id: 2,
    name: "SUV",
    disabled: false,
  },
  {
    id: 3,
    name: "Limo",
    disabled: false,
  },
  {
    id: 4,
    name: "Van",
    disabled: false,
  },
  {
    id: 5,
    name: "Bus",
    disabled: false,
  },
];

const classTypes = [
  {
    id: 1,
    name: "Economy",
    disabled: false,
  },
  {
    id: 2,
    name: "Business",
    disabled: false,
  },
  {
    id: 3,
    name: "Luxury",
    disabled: false,
  },
];

const inclusionsAndExtrasTypes = [
  {
    id: 1,
    name: "Meet N Greet",
    disabled: false,
  },
  {
    id: 2,
    name: "COVID 19 Prepared",
    disabled: false,
  },
];

const ratingsTypes = [
  {
    id: 1,
    stars: 4,
  },
  {
    id: 2,
    stars: 3,
  },
  {
    id: 3,
    stars: 2,
  },
];

const numbersOfReviewsTypes = [
  {
    id: 1,
    name: "50 or more",
  },
  {
    id: 2,
    name: "25 or more",
  },
  {
    id: 3,
    name: "10 or more",
  },
  {
    id: 4,
    name: "5 or more",
  },
  {
    id: 5,
    name: "1 or more",
  },
];

const faqsList = [];

const whyUsFeatures = [];

const SidebarFilter = ({ onVehicleTypeChange }) => {
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);

  const handleCheckboxChange = (vehicleType) => {
    const updatedVehicleTypes = selectedVehicleTypes.includes(vehicleType)
      ? selectedVehicleTypes.filter((type) => type !== vehicleType)
      : [...selectedVehicleTypes, vehicleType];

    setSelectedVehicleTypes(updatedVehicleTypes);
    onVehicleTypeChange(updatedVehicleTypes);
  }
  return (
    <div>
      <div className="px-20 py-10">
        <h1 className="mt-5 mb-3 text-xl font-semibold"> Type</h1>

        {typesData.map((type) => (
          <div className="flex" key={type.id}>
            <label className="flex items-start justify-center mt-6">
              <input
                type="checkbox"
                name="myCheckbox"
                defaultChecked={false}
                disabled={type.disabled}
                className="mr-4 h-6 w-6"
              />

              <span className="text-[20px] font-medium">{type.name}</span>
            </label>
          </div>
        ))}

        <hr className="mt-3" />

        <h1 className="mt-5 text-xl font-semibold"> Vehicle </h1>

        {vehiclesData.map((type) => (
          <div className="flex" key={type.id}>
            <label className="flex items-start justify-center mt-6">
              <input
                type="checkbox"
                name="myCheckbox"
                value={type.name.toLocaleLowerCase()}
                onChange={(e)=>handleCheckboxChange(type.name.toLocaleLowerCase())}
                defaultChecked={false}
                className="mr-4 h-6 w-6"
                disabled={type.disabled}
              />

              {type.name}
            </label>
          </div>
        ))}

        <hr className="mt-3" />

        <h1 className="mt-5 text-xl font-semibold"> Class Type </h1>

        {classTypes.map((type) => (
          <div className="flex" key={type.id}>
            <label className="flex items-start justify-center mt-6">
              <input
                type="checkbox"
                name="myCheckbox"
                defaultChecked={false}
                className="mr-4 h-6 w-6"
                disabled={type.disabled}
              />

              <span> {type.name}</span>
            </label>
          </div>
        ))}

        {/* <hr className="mt-3" />

        <h1 className="mt-5 text-xl font-semibold"> Inclusions and Extras </h1>

        {inclusionsAndExtrasTypes.map((type) => (
          <div className="flex" key={type.id}>
            <label className="flex items-start justify-center mt-6">
              <input
                type="checkbox"
                name="myCheckbox"
                defaultChecked={false}
                className="mr-4 h-6 w-6"
                disabled={type.disabled}
              />

              <span>{type.name}</span>
            </label>
          </div>
        ))} */}

        <hr className="mt-3" />

        <h1 className="mt-5 text-xl font-semibold">Rating</h1>

        <div className="flex flex-col gap-4">
          {ratingsTypes.map((rating) => (
            <label
              key={rating.id}
              className="flex items-center justify-start mt-2"
            >
              <input
                type="radio"
                name="myRadio"
                value={rating.stars}
                className="mr-4 w-6 h-6 hover:border-2 hover:border-blue-500"
              />
              <span>{rating.stars} Stars and More</span>
            </label>
          ))}
        </div>

        <hr className="mt-3" />

        <h1 className="mt-5 text-xl font-semibold">Reviews</h1>

        <div className="flex flex-col gap-4">
          {numbersOfReviewsTypes.map((review) => (
            <label
              key={review.id}
              className="flex items-center justify-start mt-2"
            >
              <input
                type="radio"
                name="myRadio"
                value={review.name}
                className="mr-4 w-6 h-6 hover:border-2 hover:border-blue-500"
              />
              <span> {review.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter
