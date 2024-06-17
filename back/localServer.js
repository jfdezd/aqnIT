const https = require('https');
const fs = require('fs');
const app = require('./api/server'); // Adjust the path based on your project structure

const port = process.env.PORT || 3001; // Use environment variable or default to 3001

const sslOptions = {
  cert: fs.readFileSync('./certs/server.cert'),
  key: fs.readFileSync('./certs/server.key')
};

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});