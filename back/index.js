const express = require('express');
const app = express();
const port = 3001;
const db = require('./db');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});

app.get('/vendors', (req, res) => {
  db.query('SELECT * FROM aquanima.vendors', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});