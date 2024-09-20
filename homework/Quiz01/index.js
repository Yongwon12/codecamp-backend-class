// 주민번호 뒷자리 가려서 보여주는 함수
// 퍼사드패턴 적용

import {
  checkBarInRegistrationNumber,
  checkLengthRegistrationNumber,
  hideRegistrationNumber,
} from "./valid-registration-number.js";

const customRegistrationNumber = function ({ myRegistrationNumber }) {
  // 주민번호에 "-"가 포함되어 있는지 검증하는 함수
  const hasBar = checkBarInRegistrationNumber(myRegistrationNumber);
  if (!hasBar) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return;
  }
  // 주민번호의 앞6자리 뒤7자리 입력 검증
  const isValid = checkLengthRegistrationNumber(myRegistrationNumber);
  if (!isValid) {
    console.log("에러 발생!!! 개수를 제대로 입력해주세요!!!");
    return;
  }
  // 주민번호 뒷자리 가리기
  const hideMyRegistrationNumber = hideRegistrationNumber(myRegistrationNumber);
  console.log(hideMyRegistrationNumber);
};

const myRegistrationNumber = "210510-1310101";
customRegistrationNumber({ myRegistrationNumber });
