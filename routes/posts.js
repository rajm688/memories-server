//importing express
import express from "express";
import  {getPosts, createPost} from "../controllers/postFunctions.js"; // need to include .js in node

//using route from express
const route = express.Router();

route.get("/", getPosts);

route.post("/", createPost);

//exporting route as postRouter
export const postRouter = route;
