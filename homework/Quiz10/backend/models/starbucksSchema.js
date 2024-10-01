import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const coffeeList = new Schema({
  author: ObjectId,
  name: String,
  img: String,
});

export const CoffeeList = mongoose.model("coffeeList", coffeeList);
