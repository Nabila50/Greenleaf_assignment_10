import React from "react";
import { useLoaderData } from "react-router";
import { BiSolidLike } from "react-icons/bi";

const TipDetails = () => {
  const gardenData = useLoaderData();

  const {
    _id,
    category,
    availability,
    image,
    email,
    phone,
    name,
    difficultiy,
  } = gardenData;

 
  return (
    <div className="bg-base-100 my-20 ">
      <div className=" bg-lime-100 py-10 rounded-4xl">
        <h1 className="lobster-regular text-4xl text-center font-bold pb-10">
          Gardener Profile and Tips
        </h1>

        <div className="hero-content flex-col lg:flex-row px-5">
          <img
            src={gardenData.image}
            className=" w-3xl lg:max-w-xl md: h-85 rounded-lg shadow-2xl mr-5"
          />
          <div>
            <h1 className="text-5xl font-bold">{gardenData.name}</h1>
            <p className="py-2">{gardenData.description}</p>
            <p className="text-base font-semibold">
              Title Of the Work: {gardenData.title}
            </p>
            <p className="py-0.5 text-base "><span className="font-semibold">Type of Plant:</span> {gardenData.plant_type}</p>

            <p className="py-0.5 text-base "><span className="font-semibold">Work Difficulties:</span>  {gardenData.difficulty}</p>
            <p className="py-0.5 text-base "><span className="font-semibold">Category of the Plant:</span>  {gardenData.category}</p>
            <p className="py-0.5 text-base "><span className="font-semibold">Availability:</span>  {gardenData.availability}</p>
            <p className="py-0.5 text-base "><span className="font-semibold">Email:</span>  {gardenData.email}</p>
            <p className="pb-5 text-base "><span className="font-semibold">Contact Number:</span>  {gardenData.phone}</p>
            <button className="btn bg-lime-400 py-5 px-10 hover:bg-amber-700"><BiSolidLike size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
