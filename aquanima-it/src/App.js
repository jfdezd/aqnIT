// App.js
import React, { useEffect, useState } from 'react';
import Login from './Login'; // Import the Login component

function App() {
  const [vendors, setVendors] = useState([]);

  console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}`)
      .then(response => response.json())
      .then(data => setVendors(data))
      .catch(err => console.error(err));
  }, []);



  return (  
    <div>
      <h1>Login</h1>
      <Login /> {/* Use the Login component */}
      <h1>Vendors</h1>
        {vendors.map(vendor => (
        <div key={vendor.vendorId}>
          <h2>{vendor.vendorName}</h2>
          <p>{vendor.vendorType}</p>
          {/* Render other vendor properties as needed */}
        </div>
      ))}
    </div>
  );
}

export default App;