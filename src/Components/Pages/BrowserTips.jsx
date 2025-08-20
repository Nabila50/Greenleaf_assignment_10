import React, { useState } from "react";
import ShareCard from "../ShareCard";
// import { Link, Links, useLoaderData } from "react-router";
import { FaRegEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const BrowserTips = () => {
  const initialGarden = useLoaderData();

  const [gardeners, setGardeners] = useState(initialGarden);

  console.log(initialGarden);

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
      // console.log(result.isConfirmed);
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

            const remainingTips = gardeners.filter(garden => garden._id !== _id);
            setGardeners(remainingTips);
            }
            
          });
      }
    });
  };

  return (
    <div className="mt-15">
      <h2 className="text-3xl text-center font-bold mb-10">
        Total Users: {initialGarden.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-lg text-black">
              <th>Serial No</th>
              <th>
                <div>
                  <div>Title</div>
                  <div>(Name)</div>
                </div>
              </th>
              <th>Category</th>
              <th>Level</th>
              <th>Status</th>
              <th>View Data</th>
              <th>Delete Data</th>
            </tr>
          </thead>
          <tbody>
            {gardeners.map((gardener, index) => (
              <tr>
                <th>{index + 1} </th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={gardener.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{gardener.title}</div>
                      <div className="opacity-50 text-lg">{gardener.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-lg">{gardener.category}</td>
                <td>{gardener.difficulty}</td>
                <td className="text-lg">{gardener.availability}</td>
                <th>
                  <Link to={`/tipDetails/${gardener._id}`}>
                    <FaRegEye className="text-2xl ml-7" />
                  </Link>
                </th>
                <th>
                  <button onClick={() => handleDelete(gardener._id)}>
                    <RiDeleteBin5Fill className="text-2xl ml-7" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowserTips;
