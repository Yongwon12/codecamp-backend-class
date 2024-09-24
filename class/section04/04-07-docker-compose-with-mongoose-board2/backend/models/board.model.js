// board collection에 들어갈 스키마 생성

import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  writer: String,
  title: String,
  contents: String,
});

export const Board = mongoose.model("Board", boardSchema);
