import React, { useState, useEffect } from 'react';

const ActiveGardeners = () => {
  // State to hold the gardener data
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    // Fetch the gardener data from the API or directly from your DB
    // Example API call using fetch (assuming a backend API is set up)
    fetch('http://localhost:3000/users')  // Update with your actual endpoint
      .then(response => response.json())
      .then(data => {
     
        const activeGardeners = data.filter(gardener => gardener.status === 'status');
  
        setGardeners(activeGardeners.slice(0, 6));  
      })
      .catch(error => console.error('Error fetching gardeners:', error));
  }, []);

  return (
    <div className="gardeners-list">
      <h2>Featured Active Gardeners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gardeners.length === 0 ? (
          <p>No active gardeners available.</p>
        ) : (
          gardeners.map(gardener => (
            <div key={gardener._id} className="card card-side bg-base-100 shadow-sm">
              <figure>
                <img
                  src={gardener.photo || 'https://via.placeholder.com/150'} // Fallback image
                  alt={gardener.name || 'Gardener'} // Fallback alt text
                  className="w-40 h-40 object-cover rounded-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{gardener.name}</h3>
                <p><strong>Category:</strong> {gardener.category}</p>
                <p><strong>Availability:</strong> {gardener.availability}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Contact</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActiveGardeners;
