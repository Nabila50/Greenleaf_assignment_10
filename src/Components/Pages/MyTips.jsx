import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router";
 

const MyTips = () => {
 
  const TipsData = useLoaderData;
  const {_id, name, email, status} = TipsData;

  
  
  const { user } = use(AuthContext);
 
  return (
    <div>
      {user && (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            
            <img
              src={TipsData.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{TipsData.email}</h1>
              <p className="py-6">
                {TipsData.status}               </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTips;
