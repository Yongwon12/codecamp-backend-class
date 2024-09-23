import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
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
            <hr />
            <div>이름: ${name}</div>
            <div>전화번호: ${phone}</div>
            <div>좋아하는 사이트:${prefer}</div>
            <div>가입일:${getToday()}</div>
            </body>

        </html>
    
    `;
  return template;
};

export const sendTemplateToEmail = async function (myEmail, template) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tjaaj159@gmail.com",
      password: "szcmdoiockaazbzh",
    },
  });
  let sendMail = await transporter.sendMail({
    from: "tjaaj159@gmail.com",
    to: myEmail,
    subject: "가입을 환영합니다.",
    html: template,
  });
  console.log(sendMail);
};
