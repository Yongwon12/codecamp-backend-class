// 옛날 방식  ==> common js 방식
// const express = require('express')

// 현대 방식  ==> module 방식
import express from "express";

const app = express();

app.get("/qqq", function (req, res) {
  res.send("오마갓~");
});

app.listen(3000);
