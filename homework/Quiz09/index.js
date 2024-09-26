import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getToken, phoneNumberLength, sendMessage } from "./phone.js";
import { phoneToken } from "./models/token.model.js";
const app = express();

app.use(express.json());
app.use(cors());

// 휴대폰 인증번호 생성 후 인증번호 보내는 API
app.post("/tokens/phone", async function (req, res) {
  const phone = req.body.phone;
  const isValid = phoneNumberLength(phone);
  if (!isValid) {
    return;
  }
  const token = getToken();

  const tokenCollection = new phoneToken({
    token,
    phone,
    isAuth: false,
  });
  const findPhone = await phoneToken.find({});
  const findMyPhone = await phoneToken.findOne({ phone });
  if (findPhone.length === 0 || !findMyPhone) {
    await tokenCollection.save();
  } else if (findPhone.length !== 0 && findMyPhone) {
    for (let i = 0; i < findPhone.length; i++) {
      await phoneToken.updateOne({ phone }, { token });
      await phoneToken.updateOne({ phone }, { isAuth: false });
    }
  }
  const sendMessages = await sendMessage(phone, token);
  console.log(sendMessages);
  res.send(sendMessages);
});

// 휴대폰 인증번호 검증 API
app.patch("/tokens/phone", async function (req, res) {
  const phone = req.body.phone;
  const token = req.body.token;
  const findPhone = await phoneToken.findOne({ phone });

  const isValid = phoneNumberLength(phone);
  if (!isValid) {
    return;
  }
  if (findPhone !== null) {
    if (token !== findPhone.token) {
      res.send(false);
      return;
    } else if (token === findPhone.token) {
      await phoneToken.updateOne({ phone }, { isAuth: true });
      res.send(true);
    }
  } else if (findPhone === null) {
    res.send(false);
  }
});

mongoose
  .connect("mongodb://mydatabase:27017/tokenmodel")
  .then(() => {
    console.log("DB 접속에 성공하였습니다.");
  })
  .catch(() => {
    console.log("DB 접속에 실패하였습니다.");
  });
app.listen(3000);
