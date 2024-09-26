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
  const API_KEY = process.env.API_KEY;
  const API_SECRET = process.env.API_SECRET;

  const messageService = new mysms(API_KEY, API_SECRET);
  await messageService
    .sendOne({
      to: "01040428702",
      from: "01040428702",
      text: `안녕하세요. 인증번호는 ${token} 입니다`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
