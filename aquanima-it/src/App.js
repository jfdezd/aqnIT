// App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/vendors')
      .then(response => response.json())
      .then(data => setVendors(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
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