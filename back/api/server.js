const express = require('express');
const cors = require('cors');
const connectDB = require('../utils/db');
const { getAllVendors, getVendor } = require('../models/vendor');

const app = express();

// Enable CORS for all requests
app.use(cors());

// Define your routes as usual
app.get('/vendors', (req, res) => {
  getAllVendors()
    .then(vendors => res.json(vendors))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Modified to use URL parameter for dynamic vendor ID
app.get('/vendor/:id', (req, res) => {
  const vendorId = req.params.id; // Access the dynamic ID from the URL
  getVendor(vendorId)
    .then(vendor => res.json(vendor))
    .catch(err => res.status(500).json({ error: err.message }));
});


// Connect to your database
connectDB().catch(err => console.error(err));

// Export the app directly
module.exports = app;