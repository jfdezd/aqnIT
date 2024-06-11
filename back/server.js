// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const { getAllVendors } = require('./vendor');

const app = express();
const port = 3001;

// Habilita CORS para todas las solicitudes
app.use(cors());

app.get('/vendors', (req, res) => {
  getAllVendors()
    .then(vendors => res.json(vendors))
    .catch(err => res.status(500).json({ error: err.message }));
});

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error(err));