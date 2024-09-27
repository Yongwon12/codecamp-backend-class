import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;
import "dotenv/config";

export const checkPhoneNum = function (myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    return false;
  } else {
    return true;
  }
};

export const getTokenMake = async function () {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  await messageService
    .sendOne({
      to: SMS_SENDER,
      from: SMS_SENDER,
      text: `안녕하세요. 인증번호는 ${token} 입니다`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
