import mongoose from "mongoose";
// creating a model which allows us to interact with database in a easy way

// creating a schema -> where schema stands for structure foe the data we store in database
const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCounter: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    // default: Date.now,
    // required:true
  },
});

const PostModel = mongoose.model("postModel", postSchema); // model takes two parameters one fileName , schemaName

export default PostModel;

// this exported model when we import it in a new file allows us to directly interact with database using this schema
