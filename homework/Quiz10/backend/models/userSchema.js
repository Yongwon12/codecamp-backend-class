import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userInfo = new Schema({
  og: {
    title: String,
    description: String,
    image: String,
  },
  author: ObjectId,
  name: String,
  email: String,
  personal: String,
  prefer: String,
  pwd: String,
  phone: String,
});

export const User = mongoose.model("user", userInfo);
