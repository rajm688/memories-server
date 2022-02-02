import PostModel from "../models/postModel.js";

//function to get all post
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostModel.find();
    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//function to create post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post)
  try{
    await newPost.save()
    res.status(201).json(newPost)
  }
  catch(err){
    res.status(409).json({mes:err.message})
  }
};
