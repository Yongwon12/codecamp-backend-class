import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
export const checkEmail = function (email) {
  if (!email.includes("@") || email === undefined) {
    console.log("이메일을 다시 한번 확인해주세요.");
    return false;
  } else {
    return true;
  }
};
// 2. 가입환영 템플릿 만들기
export const welcomeTemplate = function (name, age, school) {
  // 최신문법 사용하지 않기
  // 최신 문법 사용시 각 사이트마다 적용이 될 수도 있고 안 될 수도 있기 때문
  const welcomePage = `
      <html>
      <body>
      <div style="display:flex; flex-direction:column; align-items :center;>
      <div style="width:500px">
          <h1>${name}님 가입을 환영합니다.</h1>
          <hr />
          <div style = "color: red">이름:${name}</div>
          <div>나이:${age}</div>
          <div>학교:${school}</div>
          <div>가입일:${getToday()}</div>
          </div>
          </div>
      </body>    
      </html>
      `;
  return welcomePage;
};

// 3. 이메일에 가입환영 템플릿 전송하기
export const sendWelcomeTemplateToEmail = async function (
  myEmail,
  welcomePage
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tjaaj159@gmail.com",
      pass: "szcmdoiockaazbzh",
    },
  });

  const res = await transporter.sendMail({
    from: "tjaaj159@gmail.com",
    to: myEmail,
    subject: "[코드캠프] 가입을 축하합니다.",
    html: welcomePage,
  });
  console.log(res);

  // console.log(
  //   myEmail + "이메일로 가입환영 템플릿" + welcomePage + "를 전송합니다."
  // );
};
