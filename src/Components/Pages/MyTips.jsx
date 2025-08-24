import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Loading from "../Loading";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const MyTips = () => {
  const Tips = useLoaderData();
  
  const [allTips, setAllTips] = useState([...Tips])

   const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        console.log(result.isConfirmed);
        if (result.isConfirmed) {
          // send data to DB
          fetch(`http://localhost:3000/gardens/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount){
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
  
              // Removing the tips from the state
  
              const remainingTips = allTips.filter(tip => tip._id !== _id);
              setAllTips(remainingTips);
              }
              
            });
        }
      });
    };

  return (
    <div className="mb-20">
      <div className=" mt-8">
        <div className="  bg-lime-100 shadow-xl p-8  ">
          <div className="grid grid-cols-1 lg:flex items-center gap-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="font-bold text-lg text-black">
                    <th>Title</th>
                    <th>Category</th>
                    <th>Level</th>
                    <th>Status</th>
                    <th>Plant Type</th>
                    <th>Email Id</th>
                    <th>View</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {allTips?.map((tip) => (
                    <tr key={tip._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={tip.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div className="font-bold text-lg">
                              {tip.title}
                            </div>
                         
                        </div>
                      </td>
                      <td className="text-lg">{tip.category}</td>
                      <td className="text-lg">{tip.difficulty}</td>
                      <td className="text-lg">{tip.availability}</td>
                      <td className="text-lg">{tip.plant_type}</td>
                      <td className="text-lg">{tip.email}</td>
                      <th>
                        <Link to={`/tipDetails/${tip._id}`}>
                          <FaRegEye className="text-2xl ml-5" />
                        </Link>
                      </th>
                      <th>
                        <button onClick={() => handleDelete(tip._id)}>
                          <RiDeleteBin5Fill className="text-2xl ml-5" />
                        </button>
                      </th>
                      <th>
                        <Link to={`/UpdateTip/${tip._id}`}>
                          {" "}
                          <button className="btn bg-lime-500 text-black font-semibold px-4 py-2">
                            Update
                          </button>
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
