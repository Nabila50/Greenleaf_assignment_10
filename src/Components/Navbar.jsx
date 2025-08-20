import React, { use, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const initialUser = useLoaderData();

  const [users, setUsers] = useState(initialUser);

  const { user } = use(AuthContext);
  console.log(user)
  return (
    <div className="w-11/12 mx-auto justify-center text-center">
      <NavLink to="/" className="px-3 hover:font-bold hover:underline">
        Home
      </NavLink>
      <NavLink to="explore" className="px-3 hover:font-bold hover:underline">
        {" "}
        Explore Gardeners
      </NavLink>
      <NavLink to="browser" className="px-3 hover:font-bold hover:underline">
        Browse Tips
      </NavLink>
      <NavLink to="share" className="px-3 hover:font-bold hover:underline">
        Share a Garden Tip
      </NavLink>
       <NavLink
          to={`myTips/${user?.email}`}
          className="px-3 hover:font-bold hover:underline"
        >
          My Tips
        </NavLink>

       

      <p>{user && user.email}</p>
    </div>
  );
};

export default Navbar;
