import { getToday } from "../../utils.js";
import nodemailer from "nodemailer";
import "dotenv/config";
import axios from "axios";
import * as cheerio from "cheerio";

export const hidePersonal = function (personal) {
  let splitBar = personal.split("-");
  let hideLastNum = splitBar[0] + "-*******";
  return hideLastNum;
};

export const checkEmail = function (email) {
  if (!email.includes("@" || email === undefined)) {
    return false;
  } else {
    return true;
  }
};

export const makeTemplate = function ({ name, prefer, phone }) {
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
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;
  const EMAIL_USER = process.env.EMAIL_USER;
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  const sendMail = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: myEmail,
    subject: "가입을 환영합니다.",
    html: template,
  });
  console.log(sendMail);
};

export const scrapPage = async (url) => {
  const scrapPage = await axios.get(url);
  const $ = cheerio.load(scrapPage.data);
  const og = {};
  $("meta").each((index, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      if ($(el).attr("property").includes("og:title")) {
        const title = $(el).attr("content");
        og.title = title;
      } else if ($(el).attr("property").includes("og:description")) {
        const description = $(el).attr("content");
        og.description = description;
      } else if ($(el).attr("property").includes("og:image")) {
        const image = $(el).attr("content");
        og.image = image;
      }
    }
  });
  return og;
};
