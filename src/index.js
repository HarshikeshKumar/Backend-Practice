// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";
const app = express()(async () => {
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
