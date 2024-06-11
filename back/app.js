// app.js
const connectDB = require('./db');
const { createVendor, getVendor, updateVendor, deleteVendor } = require('./vendor');

connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    // You can call the CRUD operations here
  })
  .catch(err => console.error(err));