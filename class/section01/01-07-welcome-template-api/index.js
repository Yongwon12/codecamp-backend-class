const checkEmail = function (email) {
  if (!email.includes("@") || email === undefined) {
    console.log("이메일을 다시 한번 확인해주세요.");
    return false;
  } else {
    return true;
  }
};

const welcomeTemplate = function (name, age, school, createAt) {
  const welcomePage = `
    <html>
    <body>
        <h1>${name}님 가입을 환영합니다.</h1>
        <hr />
        <div>이름:${name}</div>
        <div>나이:${age}</div>
        <div>학교:${school}</div>
        <div>가입일:${createAt}</div>
    </body>    
    </html>
    `;
  return welcomePage;
};
const sendWelcomeTemplateToEmail = function (myEmail, welcomePage) {
  console.log(
    myEmail + "이메일로 가입환영 템플릿" + welcomePage + "를 전송합니다."
  );
};
// 이메일 검증하고 가입환영 템플릿을 사용자의 이메일로 전송
const createUser = function ({ name, age, school, email, createAt }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (!isValid) return;
  // 2. 가입환영 템플릿 만들기
  const welcomePage = welcomeTemplate(name, age, school, createAt);
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendWelcomeTemplateToEmail(email, welcomePage);
};
// 현재 날짜 받아오기
const getToday = function () {
  const todayDate = new Date();
  const Year = String(todayDate.getFullYear()).padStart(4, "");
  const Month = String(todayDate.getMonth()).padStart(2, "0");
  const Day = String(todayDate.getDay()).padStart(2, "0");
  return `${Year}-${Month}-${Day}`;
};

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "tjaaj159@naver.com";
const createAt = getToday();
createUser({ name, age, school, email, createAt });
