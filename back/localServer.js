// localServer.js
const app = require('./api/server'); // Adjust the path based on your project structure

const port = process.env.PORT || 3001; // Use environment variable or default to 3000

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});