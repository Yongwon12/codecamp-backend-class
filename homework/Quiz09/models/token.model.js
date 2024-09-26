import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tokenmodel = new Schema({
  author: ObjectId,
  token: String,
  phone: String,
  isAuth: Boolean,
});

export const phoneToken = mongoose.model("phoneToken", tokenmodel);
