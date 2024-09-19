// 안좋은 예
// const createTokenOfPhone = function (phoneNumber) {
//   // phoneNumber: 매개변수(Parameter)
//   // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
//   if (phoneNumber.length >= 10) {
//     if (phoneNumber.length <= 11) {
//       // 2. 휴대폰 토큰 6자리 만들기
//       const phoneToken = String(Math.floor(Math.random() * 1000000)).padStart(
//         6,
//         "0"
//       );
//       console.log(phoneToken);
//       // 3. 휴대폰 번호에 토큰 전송하기
//       console.log(
//         phoneNumber + "번호로 인증번호 " + phoneToken + "를 전송합니다."
//       );
//     } else {
//       console.log("에러 발생 핸드폰 번호를 제대로 입력해주세요.");
//     }
//   } else {
//     console.log("에러 발생 핸드폰 번호를 제대로 입력해주세요.");
//   }
// };

// 좋은 예
const createTokenOfPhone = function (phoneNumber) {
  // phoneNumber: 매개변수(Parameter)
  // 1. 휴대폰 번호 자릿수 맞는지 확인하기(10~11자리)
  if (phoneNumber.length < 10 || phoneNumber.length > 11) {
    console.log("에러 발생 핸드폰 번호를 제대로 입력해주세요.");
    return; // early-exit : 먼저 error를 찾아서 함수를 종료시키는 것
  }
  // 2. 휴대폰 토큰 6자리 만들기
  const phoneToken = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );
  console.log(phoneToken);
  // 3. 휴대폰 번호에 토큰 전송하기
  console.log(phoneNumber + "번호로 인증번호 " + phoneToken + "를 전송합니다.");
};

createTokenOfPhone("01012345722222"); // 01012345678: 전달인자(Argument)
