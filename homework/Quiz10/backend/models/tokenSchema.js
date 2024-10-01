import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tokenInfo = new Schema({
  author: ObjectId,
  phone: String,
  token: String,
  isAuth: Boolean,
});

export const Token = mongoose.model("token", tokenInfo);
