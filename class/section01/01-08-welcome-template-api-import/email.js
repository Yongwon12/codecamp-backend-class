import { getToday } from "./utils.js";
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
  const welcomePage = `
      <html>
      <body>
          <h1>${name}님 가입을 환영합니다.</h1>
          <hr />
          <div>이름:${name}</div>
          <div>나이:${age}</div>
          <div>학교:${school}</div>
          <div>가입일:${getToday()}</div>
      </body>    
      </html>
      `;
  return welcomePage;
};
// 3. 이메일에 가입환영 템플릿 전송하기
export const sendWelcomeTemplateToEmail = function (myEmail, welcomePage) {
  console.log(
    myEmail + "이메일로 가입환영 템플릿" + welcomePage + "를 전송합니다."
  );
};
