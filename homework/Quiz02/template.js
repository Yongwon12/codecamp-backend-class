// 가입 환영 템플릿 출력 함수
import {
  checkBarInRegistrationNumber,
  checkLengthRegistrationNumber,
} from "./valid-registration-number.js";
import { checkEmail, welcomeTemplate } from "./email.js";
const welcomeToTemplate = function ({
  name,
  email,
  registrationNumber,
  phoneNumber,
  favoriteSite,
}) {
  const isValid = checkEmail(email);
  if (!isValid) {
    return;
  }
  const hasBar = checkBarInRegistrationNumber(registrationNumber);
  if (!hasBar) {
    return;
  }
  const isRnLength = checkLengthRegistrationNumber(registrationNumber);
  if (!isRnLength) {
    return;
  }
  const result = welcomeTemplate(
    name,
    email,
    registrationNumber,
    phoneNumber,
    favoriteSite
  );
  console.log(result);
};

const name = "진롱웬";
const email = "asv@naver.com";
const registrationNumber = "980901-1234567";
const phoneNumber = "01012345678";
const favoriteSite = "google.com";

welcomeToTemplate({
  name,
  email,
  registrationNumber,
  phoneNumber,
  favoriteSite,
});
