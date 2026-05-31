const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error);
  }
};

module.exports = connectDB;