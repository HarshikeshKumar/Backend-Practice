// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Listening at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failled!!! ", err);
  });

/*
import express from "express";
const app = express()
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is Listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw err;
  }
})();
*/
