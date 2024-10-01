import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { Token } from "./models/tokenSchema.js";
import {
  getToken,
  phoneNumberLength,
  sendMessage,
} from "./controllers/services/phone.service.js";
import { CoffeeList } from "./models/starbucksSchema.js";
import { EnterUser, FetchUsers } from "./controllers/user.controller.js";

const app = express();

app.use(express.json());
app.use(cors());
const fetchUsers = new FetchUsers();
const enterUser = new EnterUser();
app.get("/users", fetchUsers.getUsers);
app.post("/user", enterUser.enterUser);
app.post("/tokens/phone", async function (req, res) {
  const phone = req.body.phone;
  const isValid = phoneNumberLength(phone);
  if (!isValid) {
    res.send("휴대폰번호를 확인해주세요.");
    return;
  }
  const token = getToken();

  const tokenCollection = new Token({
    token,
    phone,
    isAuth: false,
  });
  const findPhone = await Token.findOne({ phone });
  if (!findPhone || findPhone.phone !== phone) {
    tokenCollection.save();
  } else {
    await Token.updateOne({ phone }, { token });
  }
  const sendResult = await sendMessage(phone, token);
  res.send(sendResult);
});
app.patch("/tokens/phone", async function (req, res) {
  const phone = req.body.phone;
  const token = req.body.token;
  const findPhone = await Token.findOne({ phone });
  if (!findPhone || findPhone.phone !== phone || findPhone.token !== token) {
    res.send(false);
    return;
  } else {
    await Token.updateOne({ phone }, { isAuth: true });
    res.send(true);
  }
});
app.get("starbucks", async function (req, res) {
  const coffeeList = await CoffeeList.find();
  res.send(coffeeList);
});
mongoose
  .connect("mongodb://my-database/miniprojectdb")
  .then(() => console.log("DB 접속에 성공하였습니다."))
  .catch(() => console.log("DB 접속에 실패하였습니다."));
app.listen(3000);
