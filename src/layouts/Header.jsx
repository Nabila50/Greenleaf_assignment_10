import React, { use, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SlideShow from "../Components/SlideShow";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "valentine");

  useEffect(() => {
    // Apply theme to HTML tag
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "valentine" ? "dark" : "valentine");
  };

  const handleLogOut = () => {
    console.log("logout done");
    logOut()
      .then(() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "LogOut",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "LogOut",
              text: "LogOut Successfully",
              icon: "success",
              timer: 3000,
            });
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut is not Possible",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      });
  };

  return (
    <div className={`${theme === 'valentine' ? 'bg-lime-200' : 'bg-gray-900'} transition-colors`}>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 py-3 justify-center">
        <div className="col-span-2">
          <img className="w-20" src="logo.png" alt="" />
        </div>
        <div className="col-span-7 text-center pt-4">
          <Navbar></Navbar>
        </div>
        <div className="col-span-3 pt-3 flex justify-center">

          {/* toggle--------- */}
          <div>
            {user ? (
            <div
              className="flex gap-5 justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img className="w-11 rounded-full" src={user.photoURL} alt="" />
              {isHovered && user.email}
              <button
                onClick={handleLogOut}
                className="btn bg-lime-500 text-black font-semibold"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/auth/login"
                className="btn bg-lime-500 text-black font-semibold mr-4"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="btn bg-lime-500 text-black font-semibold mr-4"
              >
                SignUp
              </Link>
            </div>
          )}
          </div>
          <div className="mt-1">
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>

          
        </div>
      </div>
      <SlideShow></SlideShow>
    </div>
  );
};

export default Header;
