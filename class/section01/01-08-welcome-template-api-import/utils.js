export const getToday = function () {
  const todayDate = new Date();
  const Year = String(todayDate.getFullYear()).padStart(4);
  const Month = String(todayDate.getMonth() + 1).padStart(2, "0");
  const Day = String(todayDate.getDate()).padStart(2, "0");
  return `${Year}-${Month}-${Day}`;
};
getToday();
