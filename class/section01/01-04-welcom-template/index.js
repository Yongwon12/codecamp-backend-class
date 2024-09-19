// 구조분해할당 방식으로 파라미터 받기
const getWelcomeTemplate = function ({ name, age, school, createdAt }) {
  const myTemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다.</h1>
            <ht />
            <div>이름: ${name}</div>
            <div>나이: ${age}세</div>
            <div>학교: ${school}</div>
            <div>가입일: ${createdAt}</div>
        <body>
    </html>
    `;
  console.log(myTemplate);
};
const name = "철수";
const age = 10;
const school = "공룡초등학교";
const createdAt = "2024-09-18";
// short-hand property 방식으로 전달인자 넘겨주기
getWelcomeTemplate({ name, age, school, createdAt });
