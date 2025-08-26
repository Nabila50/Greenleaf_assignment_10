import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, setUser } = use(AuthContext);
 
  // ------------------sumbit for sign Up---------------
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
    console.log(email, password, restFormData);
    
    // password validation------------------
    const passwordReq =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
     if (!passwordReq.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Password Invalid",
        text: "Password should be at least 8 characters long and include 1 uppercase, 1 lowercase, and 1 special character.",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
          email,
          ...restFormData,
        }
      
        // save profile info in the DB
        fetch("https://greenleaf-assignment-10.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Congratulations! Your Profile is created",
                showConfirmButton: false,
                timer: 1500,
              });
              // form.reset();
            }
          });

        setUser(userProfile);
      })
      .catch((error) => {
        const errorCode = error.code;
       
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Problem is: ${errorCode}`,
        });
      });
  };

  return (
    <div className="hero bg-base-100 min-h-screen mt-10 p-15">
      <div className="  bg-lime-200 px-10 py-12 rounded-lg min-w-4xl ">
        <div className="text-center">
          <h1 className="text-4xl font-bold lobster-regular pb-5">
            SignUp Here!
          </h1>
        </div>
        <div className="card gap-4">
          <form onSubmit={handleSignUp} className="fieldset">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  name="name"
                  placeholder="Full Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                <label className="label">Age</label>
                <input
                  type="text"
                  className="input w-full"
                  name="age"
                  placeholder="Your Age"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Gender</label>
                <input
                  type="text"
                  className="input w-full"
                  name="gender"
                  placeholder="gender"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Photo</label>
                <input
                  type="text"
                  className="input w-full"
                  name="photo"
                  placeholder="photo URL"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Status</label>
                <input
                  type="text"
                  className="input w-full"
                  name="status"
                  placeholder="status"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Experience</label>
                <input
                  type="text"
                  className="input w-full"
                  name="experience"
                  placeholder="Share your experience"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Total Shared Tips</label>
                <input
                  type="text"
                  className="input w-full"
                  name="tips"
                  placeholder="Shared your Tips"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  name="email"
                  placeholder="Email Address"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Phone Number</label>
                <input
                  type="number"
                  className="input w-full"
                  name="phone"
                  placeholder="Your Phone Number"
                />
              </fieldset>
            </div>

            <button to="/" type="submit" className="btn btn-neutral mt-4">
              SignUp
            </button>
            <p className="text-center">
              Do you already have an account?{" "}
              <Link to="/auth/login" className="text-red-600 font-semibold und">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
