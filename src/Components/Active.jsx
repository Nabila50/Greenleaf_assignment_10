import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Active = () => {
  // State to hold the gardener data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center my-7 lobster-regular ">Featured Active Gardeners</h2>
      {loading ? (
        <span className="loading loading-bars loading-xl place-items-center"></span>
      ) : users.length === 0 ? (
        <p>No active gardeners available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 ">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex bg-lime-200 shadow-sm px-5 rounded-2xl"
            >
              <figure>
                <img
                  src={user.photo || "https://via.placeholder.com/150"}
                  alt={user.name || "Gardener"}
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
                <div className="card-actions justify-end">
                  <Link to={`/users/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Active;
