import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const { LogIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    LogIn(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "LogIn Successfully",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Problem is: ${errorCode}`, 
        });
        setError(errorCode);
        
      });
  };

  return (
    <div className="hero bg-base-100 min-h-screen mt-20">
      <div className="hero-content grid grid-cols-1 bg-lime-200 px-10 py-12 rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login Your Account</h1>
        </div>
        <div className="card bg-lime-100 w-96  shrink-0 shadow-2xl">
          <div className="card-body ">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <Link to="/auth/signup" className="text-red-600 font-semibold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
