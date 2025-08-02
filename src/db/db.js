const mongoose = require("mongoose");

const dbURI = process.env.MONGO_URI;
// console.log("Database URI:", dbURI);

function connectDb() {
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
}

module.exports = connectDb;
