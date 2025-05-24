const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://nithin:NUD86cESbahBt8cr@cluster0.ix4d965.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0');

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;
