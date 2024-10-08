import coolsms from "coolsms-node-sdk";
import "dotenv/config";
const mysms = coolsms.default;

export const phoneNumberLength = function (phone) {
  if (phone.length !== 10 && phone.length !== 11) {
    console.log("휴대폰 번호를 확인해주세요.");
    return false;
  } else {
    return true;
  }
};

export const getToken = function () {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return token;
};
export const sendMessage = async function (phone, token) {
  if (phone.length === 10) {
    const sendTokenMessage1 = `${phone.slice(0, 3)}-${phone.slice(
      3,
      6
    )}-${phone.slice(6, 10)}으로 인증문자가 전송되었습니다.`;
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;
    const messageService = new mysms(SMS_KEY, SMS_SECRET);
    await messageService
      .sendOne({
        to: phone,
        from: SMS_SENDER,
        text: `[인증번호]${token}가 전송되었습니다.`,
      })
      .then(() => {
        console.log("요청에 성공하였습니다.");
      })
      .catch(() => {
        console.log("요청에 실패하였습니다.");
      });
    return sendTokenMessage1;
  } else if (phone.length === 11) {
    const sendTokenMessage2 = `${phone.slice(0, 3)}-${phone.slice(
      3,
      7
    )}-${phone.slice(7, 11)}으로 인증문자가 전송되었습니다.`;
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;
    const messageService = new mysms(SMS_KEY, SMS_SECRET);
    await messageService
      .sendOne({
        to: phone,
        from: SMS_SENDER,
        text: `[인증번호]${token}가 전송되었습니다.`,
      })
      .then(() => {
        console.log("요청에 성공하였습니다.");
      })
      .catch(() => {
        console.log("요청에 실패하였습니다.");
      });
    return sendTokenMessage2;
  }
};
