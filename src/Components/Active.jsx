import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Active = () => {
  
  // const {_id, name, status} = useLoaderData()
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://greenleaf-assignment-10.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
        setUsers([]);
      });
  }, []);

  return (
    <div className="my-20 bg-lime-50 py-8 px-10 rounded-2xl ">
      <h2 className="text-3xl font-bold text-center py-3 mb-4 lobster-regular">Featured Active Gardeners</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 ">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex bg-lime-100 shadow-sm px-5 rounded-2xl"
            >
              <figure>
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-40 h-40 object-cover rounded-full mt-10"
                />
              </figure>
              <div className="card-body">
                <div className="flex gap-5">
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <div className="badge bg-lime-500 py-4 px-3 font-bold">{user.status}</div>
                </div>
                <p className="text-lg">
                  <strong>Age:</strong> {user.age}
                </p>
                <p  className="text-lg">
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p className="text-lg">
                  <strong>Experience of Work:</strong> {user.experience} years
                </p>
                <p className="text-lg">
                  <strong>Total Number of Tips:</strong> {user.tips}
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> {user.email}
                </p>
            
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Active;
