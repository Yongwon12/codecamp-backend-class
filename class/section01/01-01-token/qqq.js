console.log("안녕하세요!!");

const getToken = function () {
  const random = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(random);
};

getToken();
