import { hideRegistrationNumber } from "./valid-registration-number.js";
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
export const welcomeTemplate = function (
  name,
  email,
  registrationNumber,
  phoneNumber,
  favoriteSite
) {
  const welcomePage = `
      <html>
      <body>
          <h1>${name}님 가입을 환영합니다.</h1>
          <hr />
          <div>이메일:${email}</div>
          <div>주민번호:${hideRegistrationNumber(registrationNumber)}</div>
          <div>휴대폰 번호:${phoneNumber}</div>
          <div>내가 좋아하는 사이트:${favoriteSite}</div>
      </body>    
      </html>
      `;
  return welcomePage;
};
