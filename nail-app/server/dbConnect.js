"use strict";
const Mongoose = require("mongoose");

const uri = process.env.DB_URI || "mongodb://localhost/myFirstDatabase"; // use either localhost or 127.0.0.1

// Connect to MongoDB
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error: " + error.message));

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;
