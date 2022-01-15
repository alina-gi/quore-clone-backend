const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path: 'config.env'})
const DB=process.env.DB

const connectToMongoDB=()=>{
  mongoose.connect(DB).then(()=> {
    console.log("connection succesful")
  }) .catch((err)=> console.log("no connection"))
}
module.exports = connectToMongoDB;

