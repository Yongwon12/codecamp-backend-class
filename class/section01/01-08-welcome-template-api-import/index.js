import {
  checkEmail,
  welcomeTemplate,
  sendWelcomeTemplateToEmail,
} from "./email.js";
import { getToday } from "./utils.js";
// 이메일 검증하고 가입환영 템플릿을 사용자의 이메일로 전송
const createUser = function ({ name, age, school, email }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (!isValid) return;
  // 2. 가입환영 템플릿 만들기
  const welcomePage = welcomeTemplate(name, age, school);
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, welcomePage);
};

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "tjaaj159@naver.com";
createUser({ name, age, school, email });
