const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');
const mongoose = require('mongoose');

const app = express();

// Connect to database
//connectDB();
    mongoose.connect('mongodb://localhost:27017/rentify', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
