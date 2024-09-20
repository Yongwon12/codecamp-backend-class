export const checkBarInRegistrationNumber = function (myRegistrationNumber) {
  if (!myRegistrationNumber.includes("-")) {
    console.log("주민등록번호 형식을 다시 확인해주세요.");
    return false;
  } else {
    return true;
  }
};

export const checkLengthRegistrationNumber = function (myRegistrationNumber) {
  const myRnArr = myRegistrationNumber.split("-");
  if (myRnArr[0].length !== 6 || myRnArr[1].length !== 7) {
    console.log("주민등록번호 길이를 다시 확인해주세요.");
    return false;
  } else {
    return true;
  }
};

export const hideRegistrationNumber = function (myRegistrationNumber) {
  let myRnLastNumGender = myRegistrationNumber.split("-")[1][0];
  let myRnLastNumBirth = myRegistrationNumber.split("-")[0];
  myRnLastNumGender = `${myRnLastNumBirth}-${myRnLastNumGender}******`;
  return myRnLastNumGender;
};
