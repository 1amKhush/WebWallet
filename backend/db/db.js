const mongoose = require('mongoose');

const db = async () => {
   try{
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DataBase succesfully connected")
   } 
   catch (error) {
    console.log("Error Connecting to DataBase")
   }
};

module.exports = {db}

