// App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}`)
  //fetch('http://localhost:3001/vendors')
      .then(response => response.json())
      .then(data => setVendors(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <div id="g_id_onload"
          data-client_id="746409138875-cpd7609pif31hrvsllsrasbti82md9f6.apps.googleusercontent.com" 
          data-login_uri="http://localhost:3000"
          data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left">
      </div>
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