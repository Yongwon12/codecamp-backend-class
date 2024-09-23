import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;

export const checkPhoneNum = function (myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    return false;
  } else {
    return true;
  }
};

export const getTokenMake = function () {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

  const messageService = new mysms(
    "NCSX4BPLHHLRMLQ3",
    "AXS90DXIBJSSKDUG52QP2TWLBZCACTFO"
  );
  messageService
    .sendOne({
      to: "01040428702",
      from: "01040428702",
      text: `안녕하세요. 인증번호는 ${token} 입니다`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
