import React, { useState } from "react";
import ShareCard from "../ShareCard";
// import { Link, Links, useLoaderData } from "react-router";
import { FaRegEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const BrowserTips = ({_id}) => {
  const initialGarden = useLoaderData(_id);
 
  const [gardeners, setGardeners] = useState(initialGarden);
  console.log(initialGarden);

  return (
      <div className="mt-15">
        <h2 className="text-3xl text-center font-bold mb-10">Total Users: {initialGarden.length}</h2>
         
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
              </tr>
            </thead>
            <tbody>
              
              {
                gardeners.map((gardener, index)=> 
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
                  {/* <Link to={`/tipDetails/${gardener._id}`}>okay</Link> */}
                  <Link to={`/tipDetails/${gardener._id}`}>
                      
                    <FaRegEye className="text-2xl" />
                     
                  </Link>  
                </th>
              </tr>
  
  
                 )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BrowserTips;
