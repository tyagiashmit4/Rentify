const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async () => {
  try {
    const url = process.env.mongodburl;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
