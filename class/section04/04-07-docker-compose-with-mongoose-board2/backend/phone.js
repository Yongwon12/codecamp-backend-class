import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;
import "dotenv/config";
// 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
export const phoneNumberCheck = function (phoneNumber) {
  if (phoneNumber.length < 10 || phoneNumber.length > 11) {
    console.log("에러 발생 핸드폰 번호를 제대로 입력해주세요.");
    return false; // early-exit : 먼저 error를 찾아서 함수를 종료시키는 것
  } else {
    return true;
  }
};
// 2. 휴대폰 토큰 6자리 만들기
export const getPhoneToken = function () {
  const phoneToken = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );
  console.log(phoneToken);
  return phoneToken;
};

// 3. 휴대폰 번호에 토큰 전송하기
export const sendPhoneTokenToSMS = async function (phoneNumber, phoneToken) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  const res = await messageService.sendOne({
    to: phoneNumber,
    from: SMS_SENDER,
    text: `[코드캠프]안녕하세요. 요청하신 인증번호는 ${phoneToken}입니다.`,
  });
  console.log(res);
};
