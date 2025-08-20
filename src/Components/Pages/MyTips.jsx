 
import React from "react";
import { Link, useLoaderData } from "react-router"; 
import Loading from "../Loading";  

const MyTips = () => {
  const gardens = useLoaderData();  
  // const { name, age, gender, email, status, experience, tips, phone, photo } = users;
  console.log(gardens);

  return (
    <div className="mb-20">
      <div className="w-11/12 mx-auto mt-8">
        <div className="  bg-lime-200 shadow-xl p-8  ">
          <div className="grid grid-cols-1 lg:flex items-center gap-10">
            <img
            src={gardens?.photo}
            alt={ gardens?.name || "No Name"}
            className="w-100 h-100 rounded-lg object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold">Name: {gardens?.name}</h2>
            <p className="text-lg mt-3"><span className="font-semibold">Age:</span> {gardens?.age} Years</p>
            <p className="text-lg mt-1"><span className="font-semibold">Gender:</span> {gardens?.gender}</p>
            <p className="text-lg mt-1"><span className="font-semibold">Email: </span>{gardens?.email}</p>
            <p className="text-lg mt-1"><span className="font-semibold">Status:</span> {gardens?.status}</p>
            <p className="mt-2"><span className="font-semibold">Experience:</span> {gardens?.experience} Years</p>
            <p className="mt-2"><span className="font-semibold">Tips:</span> {gardens?.tips}</p>
            <p className="mt-2"><span className="font-semibold">Phone:</span> {gardens?.phone}</p>

            <Link to={`/UpdateTip/${gardens._id}`}> <button className="btn bg-lime-500 text-black font-semibold mt-6">Update Tips</button></Link>
             
           
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyTips;