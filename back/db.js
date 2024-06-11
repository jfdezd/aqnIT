// db.js
const mongoose = require('mongoose');

function connectDB() {
  return mongoose.connect('mongodb+srv://admin:Zawl4rwiBmzQ8cv7@aqnit.o1mc6xz.mongodb.net/aquanima?retryWrites=true&w=majority&appName=aqnit', {useNewUrlParser: true, useUnifiedTopology: true});
}


module.exports = connectDB;