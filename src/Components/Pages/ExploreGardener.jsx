import React, { useState } from "react";
import { useLoaderData } from "react-router";

const ExploreGardener = () => {
  const exploreData = useLoaderData();
  
  
  const [gardeners, setGardeners] = useState(exploreData);

 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 bg-base-200">
      {gardeners.map((gardener) =>  (
        <div  className="card card-side shadow-sm bg-lime-200 py-5 px-5  md:grid-cols-2">
          <figure>
            <img className=" w-40 h-60 md:h-80 md:w-50 rounded-xl"
              src={gardener.photo}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">{gardener.name}</h2>
            <p className="text-base"><span className="font-semibold">Email: </span>{gardener.email} </p>
            <p className="text-base"><span className="font-semibold">Age: </span>{gardener.age} </p>
            <p className="text-base"><span className="font-semibold">Gender: </span>{gardener.gender} </p>
            <p className="text-base"><span className="font-semibold">Status: </span>{gardener.status} </p>
            <p className="text-base"><span className="font-semibold">Experience: </span>{gardener.experience} years </p>
            <p className="text-base"><span className="font-semibold">Total Shared Tips: </span>{gardener.tips} years </p>
            <p className="text-base"><span className="font-semibold">Contact Number:</span>{gardener.phone} years </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ExploreGardener;
