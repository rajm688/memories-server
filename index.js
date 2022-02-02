//importing express, mongoose,crose as type: module change in package.json
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//importing userRoute
import { postRouter } from "./routes/posts.js";

//dotenv configuring
dotenv.config();

// initialize app in express
const app = express();

//middle ware for incoming json files
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // why extended

//cros middle ware permits access for Backend data from front end
app.use(cors());

//using middleware for connecting route
app.use("/post", postRouter);

// setting mongodbURL
const Mongo_URL = process.env.Mongo_URL;

//setting port
const PORT = process.env.PORT;

//connecting to mongoDB through mongoose

//method - 1
mongoose.connect(Mongo_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected"));
app.listen(PORT, () => console.log("PORT connected"));

//method - 2
// mongoose.connect(Mongo_URL,{useNewUrlParser:true, useUnifiedTopology:true})//what this for..?
// .then(()=>app.listen(PORT,()=>console.log("PORT connected")))
// .catch((error)=>console.log(error.message))
