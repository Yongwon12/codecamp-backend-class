// 옛날 방식  ==> common js 방식
// const express = require('express')

// 현대 방식  ==> module 방식
import express from "express";

const app = express();
// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가진돈 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // 2. 판매여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // 3. 상품 구매하는 코드
  // if(돈있음 && !판매완료){
  //   res.send("상품 구매 완료!!!")
  // }
});

// 상품 환불하기 API

app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...

  // 2. 상품 환불하는 코드
  if (판매완료) {
    res.send("상품 환불 완료!!");
  }
});

app.listen(3000);
