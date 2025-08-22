import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ShareTips = () => {
  const handleShare = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newShare = Object.fromEntries(formData);
    console.log(newShare);

    // send share data to the MongoDB
    fetch("http://localhost:3000/gardens", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newShare),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Data Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="hero bg-base-100 min-h-screen mt-10 p-15">
      <div className="hero-content grid grid-cols-1 bg-lime-100 px-15 py-12 rounded-lg">
        <form onSubmit={handleShare}>
          <div className="text-center">
            <h1 className="text-4xl font-bold lobster-regular">
              Share Your Tips
            </h1>
            <p className="my-5">
              Gardening is both an art and a science—nurturing plants while
              creating a beautiful, balanced space. It connects you to nature,
              reduces stress, and can even provide fresh food or flowers. With
              patience and care, a tiny seed can grow into something vibrant and
              life-giving.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full"
                name="title"
                placeholder="Write your title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Plant Type</label>
              <input
                type="text"
                name="plant_type"
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
                  className="radio radio-success mr-3"
                  value="Easy"
                  defaultChecked
                />{" "}
                <p>Easy</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="difficulty"
                  className="radio radio-success mr-3"
                  value="Medium"
                  defaultChecked
                />{" "}
                <p>Medium</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="difficulty"
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
                className="input  w-full"
                placeholder="Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Image</label>
              <input
                type="text"
                name="image"
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
                  className="radio radio-success mr-3"
                  value="Plant care"
                />{" "}
                <p>Plant Care</p>
              </div>
              <div className=" flex">
                <input
                  type="radio"
                  name="category"
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
                className="input  w-full"
                placeholder="Enter Your Email Address"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input  w-full"
                placeholder="Enter your name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="input  w-full"
                placeholder="Enter your phone"
              />
            </fieldset>
          </div>

          <input type="submit" className="btn w-full" value="Submit Form" />
         
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
