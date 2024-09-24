// 옛날 방식  ==> common js 방식
// const express = require('express')

// 현대 방식  ==> module 방식
import express from "express";

import {
  phoneNumberCheck,
  getPhoneToken,
  sendPhoneTokenToSMS,
} from "./phone.js"; // export 가져오기
import {
  checkEmail,
  sendWelcomeTemplateToEmail,
  welcomeTemplate,
} from "./email.js";
// import express from "express";     // export default 가져오기(기본적으로 가져오게 되는 export 이름 변경이 가능함)
// import qwer from "express";        // export default 이름바꾸기
// import qwer,{phoneNumberCheck as zzzz,getPhoneToken} from "./phone.js"    // export default와 export를 함께 쓰기

// import * as jesus from "./phone.js"    // export 한번에 다 가져오기
// jesus.getPhoneToken                    // export 한번에 다 가져오기
// jesus.phoneNumberCheck                 // export 한번에 다 가져오기

// const swaggerUi = require('swagger-ui-express');     // 옛날 방식
// const swaggerDocument = require('./swagger.json');   // 옛날 방식
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";
const app = express();

// express에서 json 데이터를 해석할 수 있게 해주는 메서드
app.use(express.json()); // 옛날에는 bodyParser를 사용했음
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/board", async function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  // const result = [
  //   { number: 1, writer: "철수", title: "제목", contents: "내용" },
  //   { number: 2, writer: "영희", title: "제목", contents: "내용" },
  //   { number: 3, writer: "훈이", title: "제목", contents: "내용" },
  // ];

  // 1. DB에 접속 후, 데이터를 조회
  const result = await Board.find();
  // 2. DB에서 꺼내온 결과를 브라우저에 응답(Response)으로 주기
  res.send(result);
});

app.post("/board", async function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("=================");
  console.log(req.body);

  // 2. DB에 접속 후, 데이터를 저장
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents,
  });
  await board.save();
  // 3. DB에 저장된 결과를 브라우저에 응답(Response)으로 주기
  res.send("게시물 등록에 성공했습니다.");
});

app.post("/tokens/phone", function (req, res) {
  // phoneNumber: 매개변수(Parameter)

  const phoneNumber = req.body.phoneNumber;
  // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = phoneNumberCheck(phoneNumber);
  if (isValid === false) {
    res.send("인증 불가");
    return;
  }

  // 2. 휴대폰 토큰 6자리 만들기
  const phoneToken = getPhoneToken(phoneNumber);
  // 3. 휴대폰 번호에 토큰 전송하기
  sendPhoneTokenToSMS(phoneNumber, phoneToken);
  res.send("인증완료!!!");
});
app.post("/users", function (req, res) {
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email
  // 구조분해 할당
  const { name, age, school, email } = req.body;
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (!isValid) return;
  // 2. 가입환영 템플릿 만들기
  const welcomePage = welcomeTemplate(name, age, school);
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, welcomePage);
  res.send("가입완료");
});
mongoose
  .connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("DB 접속에 성공하였습니다."))
  .catch(() => console.log("DB 접속에 실패하였습니다."));
app.listen(3000);
