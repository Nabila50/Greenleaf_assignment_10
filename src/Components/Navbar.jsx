import React, { use, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const initialUser = useLoaderData();

  const [users, setUsers] = useState(initialUser);

  const { user } = use(AuthContext);
  console.log(user)
  return (
    <div className="w-11/12 mx-auto justify-center text-center text-base ">
      <NavLink to="/" className= {({ isActive }) =>
          isActive ? 'text-green-600 font-bold border-b-2 px-3 border-green-600' : 'text-black-700 font-semibold px-3'
        }>
         {" "}
        Home
         
      </NavLink>
      <NavLink to="explore" className= {({ isActive }) =>
          isActive ? 'text-green-600 font-bold border-b-2 px-3 border-green-600' : 'text-black-700 font-semibold px-3'
        }>
        {" "}
        Explore Gardeners
      </NavLink>
      <NavLink to="browser"  className= {({ isActive }) =>
          isActive ? 'text-green-600 font-bold border-b-2 px-3 border-green-600' : 'text-black-700 font-semibold px-3'
        }>
          {" "}
        Browse Tips
      </NavLink>
      <NavLink to="share" className= {({ isActive }) =>
          isActive ? 'text-green-600 font-bold border-b-2 px-3 border-green-600' : 'text-black-700 font-semibold px-3'
        }>
        Share a Garden Tip
      </NavLink>
       <NavLink
          to={`myTips/${user?.email}`}
          className= {({ isActive }) =>
          isActive ? 'text-green-600 font-bold border-b-2 px-3 border-green-600' : 'text-black-700 font-semibold px-3'
        }>
          My Tips
        </NavLink>

       

      <p>{user && user.email}</p>
    </div>
  );
};

export default Navbar;
