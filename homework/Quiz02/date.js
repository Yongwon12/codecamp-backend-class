const todayDate = function () {
  const Year = new Date().getFullYear();
  const Month = String(new Date().getMonth() + 1).padStart(2, "0");
  const Day = String(new Date().getDate()).padStart(2, "0");
  const Hour = String(new Date().getHours()).padStart(2, "0");
  const Min = String(new Date().getMinutes()).padStart(2, "0");
  const Sec = String(new Date().getSeconds()).padStart(2, "0");
  const today = `오늘은 ${Year}년 ${Month}월 ${Day}일 ${Hour}:${Min}:${Sec} 입니다`;
  console.log(today);
  return today;
};
todayDate();
