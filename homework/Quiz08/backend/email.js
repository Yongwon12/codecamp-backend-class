import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
import "dotenv/config";
export const checkEmail = function (email) {
  if (!email.includes("@" || email === undefined)) {
    return false;
  } else {
    return true;
  }
};

export const makeTemplate = function (name, prefer, phone) {
  const template = `
        <html>
            <header>
            <title>${name}님 가입을 환영합니다.</title>
            </header>
            <body>
            <h1>${name}님 가입을 환영합니다.</h1>
            <hr />
            <div>이름: ${name}</div>
            <div style=color:blue>전화번호: ${phone}</div>
            <div style=color:blue>좋아하는 사이트: ${prefer}</div>
            <div style=color:red>가입일: ${getToday()}</div>
            </body>

        </html>
    
    `;
  return template;
};

export const sendTemplateToEmail = async function (myEmail, template) {
  const API_GMAIL_PW = process.env.API_GMAIL_PW;
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tjaaj159@gmail.com",
      pass: API_GMAIL_PW,
    },
  });
  const sendMail = await transporter.sendMail({
    from: "tjaaj159@gmail.com",
    to: myEmail,
    subject: "가입을 환영합니다.",
    html: template,
  });
  console.log(sendMail);
};
