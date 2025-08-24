import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTip = () => {
  const {
    _id,
    title,
    plant_type,
    difficulty,
    description,
    image,
    category,
    availability,
    email,
    name,
    phone,
  } = useLoaderData();

  const handleUpdateTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTips = Object.fromEntries(formData.entries());
    console.log(updatedTips);

    // send updatedTip to the database
    fetch(`http://localhost:3000/gardens/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tips updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="hero bg-base-100 min-h-screen  mt-10 p-15">
      <div className="lg:w-5xl bg-lime-200 px-5 lg:px-15 py-12 rounded-lg">
        <form onSubmit={handleUpdateTip}>
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold lobster-regular">
              Update Your Tips
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full"
                name="title"
                defaultValue={title}
                placeholder="Write your title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Plant Type</label>
              <input
                type="text"
                name="plant_type"
                defaultValue={plant_type}
                className="input w-full"
                placeholder="Plant Type"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Difficult Level</label>
              <div className=" flex">
                <input
                  type="radio"
                  name="difficulty"
                  defaultChecked={difficulty === "Easy"}
                  className="radio radio-success mr-3"
                  value="Easy"
                />{" "}
                <p>Easy</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="difficulty"
                  defaultChecked={difficulty === "medium"}
                  className="radio radio-success mr-3"
                  value="Medium"
                />{" "}
                <p>Medium</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="difficulty"
                  defaultChecked={difficulty === "hard"}
                  className="radio radio-success mr-3"
                  value="Hard"
                />{" "}
                <p>Hard</p>
              </div>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                className="input  w-full"
                placeholder="Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Image</label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="input  w-full"
                placeholder="Image URL"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <div className=" flex">
                <input
                  type="radio"
                  name="category"
                  defaultValue={category}
                  className="radio radio-success mr-3"
                  value="composting"
                  defaultChecked
                />{" "}
                <p>Composting</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="category"
                  defaultValue={category}
                  className="radio radio-success mr-3"
                  value="Plant care"
                />{" "}
                <p>Plant Care</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="category"
                  defaultValue={category}
                  className="radio radio-success mr-3"
                  value="Vertical Gardening"
                  defaultChecked
                />{" "}
                <p>Vertical Gardening</p>
              </div>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Availability</label>
              <div className=" flex">
                <input
                  type="radio"
                  name="availability"
                  defaultValue={availability}
                  className="radio radio-success mr-3"
                  value="public"
                  defaultChecked
                />{" "}
                <p>Public</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="availability"
                  defaultValue={availability}
                  className="radio radio-success mr-3"
                  value="hidden"
                  defaultChecked
                />{" "}
                <p>Hidden</p>
              </div>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                defaultValue={email}
                className="input  w-full"
                placeholder="Enter Your Email Address"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input  w-full"
                placeholder="Enter your name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                className="input  w-full"
                placeholder="Enter your phone"
              />
            </fieldset>
          </div>
          <Link to={`/myTips/${email}`}>
            <input type="submit" className="btn w-full" value="Update Tip" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;
