const express = require('express');
const cors = require('cors');
const connectDB = require('../utils/db');
const { getAllVendors } = require('../models/vendor');

const app = express();

// Enable CORS for all requests
app.use(cors());

// Define your routes as usual
app.get('/vendors', (req, res) => {
  getAllVendors()
    .then(vendors => res.json(vendors))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Connect to your database
connectDB().catch(err => console.error(err));

// Export the app directly
module.exports = app;