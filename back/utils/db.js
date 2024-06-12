require('dotenv').config();
// db.js
const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

function connectDB() {
  console.log(dbUser);
  console.log(dbPassword);
  return mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@aqnit.o1mc6xz.mongodb.net/aquanima?retryWrites=true&w=majority&appName=aqnit`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}


module.exports = connectDB;