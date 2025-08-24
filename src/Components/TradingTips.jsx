import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TradingTips = () => {
  const [tips, setTips] = useState([]);
 

  useEffect(() => {
    fetch("https://garden-community-website.web.app/gardens/description")
      .then((response) => response.json())
      .then((data) => {
        setTips(data);
      })
      .catch((error) => {
        console.log("error is:", error);
      });
  }, []);

  
  return (
    <div className="my-10 ">
      <ul className="list bg-lime-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-3xl font-bold text-center my-5 lobster-regular tracking-wide">
          Top Trading Tips
        </li>
        {tips.map((tip) => (
          <li
            key={tip._id}
            className="list-row bg-lime-50 border-lime-400 border-1"
          >
            <div>
              <img className="size-30 rounded-box" src={tip.image} />
            </div>
            <div className="gap-2">
              <div className="font-bold">{tip.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {tip.category}
              </div>
              <div>
                <p className="list-col-wrap mt-4">{tip.description}</p>
                <p className=" "> Label of work: {tip.difficulty}</p>
                <p className=" "> Email: {tip.email}</p>
              </div>
            </div>

            
            <button className="btn btn-square btn-ghost mt-10">
              <svg
                className="size-[2.5em]"
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradingTips;
