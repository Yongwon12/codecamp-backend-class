export const checkBarInRegistrationNumber = function (myRegistrationNumber) {
  if (!myRegistrationNumber.includes("-")) {
    return false;
  } else {
    return true;
  }
};

export const checkLengthRegistrationNumber = function (myRegistrationNumber) {
  const myRnArr = myRegistrationNumber.split("-");
  if (myRnArr[0].length !== 6 || myRnArr[1].length !== 7) {
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
