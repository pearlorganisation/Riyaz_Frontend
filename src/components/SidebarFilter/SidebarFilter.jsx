import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getVehicles } from "../../features/actions/vehicleAction";
import { useDispatch } from "react-redux";
const typesData = [
  {
    id: 1,
    name: "Shared",
    disabled: false,
  },
  {
    id: 2,
    name: "Private",
    disabled: false,
  },
  {
    id: 3,
    name: "Rideshare",
    disabled: false,
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
  
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]); // for vehicle types
  const [selectedTypes, setSelectedTypes] = useState([]); // for types of ride
  const [selectedClassTypes, setSelectedClassTypes] = useState([]); // for selecting by class types of vehicles
  const [selectedRatingTypes, setSelectedRatingTypes] = useState([]); // for selecting vehicles on ratings type
  const [selectedReviewTypes, setSelectedReviewTypes] = useState([]); // for selecting based on reviews

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Handle checkbox change for serviceType
  const handleCheckType = (type) => {
    let updatedTypes = [...selectedTypes];
    if (updatedTypes.includes(type)) {
      updatedTypes = updatedTypes.filter((t) => t !== type);
    } else {
      updatedTypes.push(type);
    }
    setSelectedTypes(updatedTypes);
  };

  // Handle checkbox change for vehicleType
  const handleCheckboxChange = (vehicleType) => {
    let updatedVehicleTypes = [...selectedVehicleTypes];
    if (updatedVehicleTypes.includes(vehicleType)) {
      updatedVehicleTypes = updatedVehicleTypes.filter((vt) => vt !== vehicleType); // vt = vehicle type
    } else {
      updatedVehicleTypes.push(vehicleType);
    }
    setSelectedVehicleTypes(updatedVehicleTypes);
  };

  // Handle Checkbox change for vehicle class type
  const handleClassCheckbox =(classType)=>{
    let updatedClassType = [...selectedClassTypes];
    if(updatedClassType.includes(classType)){
      updatedClassType = updatedClassType.filter((ct)=> ct !== classType); // ct = class type
    }else{
      updatedClassType.push(classType)
    }
    setSelectedClassTypes(updatedClassType);
  }

  // use effect to run on changing on different value
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const existingServiceTypes = searchParams.getAll("serviceType");
    const existingVehicleTypes = searchParams.getAll("vehicleType");
    const existingClassTypes = searchParams.getAll("vehicleClass");

    // Update URL if selectedTypes or selectedVehicleTypes changed
    if (selectedTypes.sort().join(",") !== existingServiceTypes.sort().join(",") ||
      selectedVehicleTypes.sort().join(",") !== existingVehicleTypes.sort().join(",") || selectedClassTypes.sort().join(",") !== existingClassTypes.sort().join(",")) {

      searchParams.delete("serviceType");
      searchParams.delete("vehicleType");
      searchParams.delete("vehicleClass");

      selectedTypes.forEach((type) => searchParams.append("serviceType", type));
      selectedVehicleTypes.forEach((type) => searchParams.append("vehicleType", type));
      selectedClassTypes.forEach((type)=>searchParams.append("vehicleClass",type)) 
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }

    // Dispatch getVehicles with the selected types and vehicle types in params
    dispatch(getVehicles({ serviceType: selectedTypes, vehicleType: selectedVehicleTypes, vehicleClass: selectedClassTypes }));
  }, [selectedTypes, selectedVehicleTypes, selectedClassTypes, navigate, location, dispatch]);
  return (
    <div>
      <div className="px-20 py-10">
        <h1 className="mt-5 mb-3 text-xl font-semibold"> Type</h1>

        {typesData.map((type) => (
          <div className="flex" key={type.id}>
            <label className="flex items-start justify-center mt-6">
              <input
                type="checkbox"
                name="serviceTypeCheckbox"
                value={type.name}
                onChange={(e)=>handleCheckType(type.name)}
                disabled={type.disabled}
                defaultChecked={false}
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
                name="vehicleTypeCheckbox"
                value={type.name}
                onChange={() => handleCheckboxChange(type.name)}
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
                name="myClassTypeCheckbox"
                value={type.name}
                onChange={()=>handleClassCheckbox(type.name)}
                defaultChecked={false}
                className="mr-4 h-6 w-6"
                disabled={type.disabled}
              />

              <span> {type.name}</span>
            </label>
          </div>
        ))}

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
