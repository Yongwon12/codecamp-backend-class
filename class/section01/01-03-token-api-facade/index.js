// 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
const phoneNumberCheck = function (phoneNumber) {
  if (phoneNumber.length < 10 || phoneNumber.length > 11) {
    console.log("에러 발생 핸드폰 번호를 제대로 입력해주세요.");
    return false; // early-exit : 먼저 error를 찾아서 함수를 종료시키는 것
  } else {
    return true;
  }
};
// 2. 휴대폰 토큰 6자리 만들기
const getPhoneToken = function () {
  const phoneToken = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );
  console.log(phoneToken);
  return phoneToken;
};
// 3. 휴대폰 번호에 토큰 전송하기
const sendPhoneTokenToSMS = function (phoneNumber, phoneToken) {
  console.log(phoneNumber + "번호로 인증번호 " + phoneToken + "를 전송합니다.");
};
// 휴대폰 인증 fake API
const createTokenOfPhone = function (phoneNumber) {
  // phoneNumber: 매개변수(Parameter)
  // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = phoneNumberCheck(phoneNumber);
  if (isValid === false) return;
  // 2. 휴대폰 토큰 6자리 만들기
  const phoneToken = getPhoneToken();
  // 3. 휴대폰 번호에 토큰 전송하기
  sendPhoneTokenToSMS(phoneNumber, phoneToken);
};

createTokenOfPhone("01012345678"); // 01012345678: 전달인자(Argument)
