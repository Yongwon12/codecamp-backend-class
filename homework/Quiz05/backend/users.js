export const profile = function () {
  const usersProfile = [
    {
      email: "aaa1@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa2@gmail.com",
      name: "영희",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa3@gmail.com",
      name: "훈이",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa4@gmail.com",
      name: "짱구",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa5@gmail.com",
      name: "맹구",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
  ];

  return usersProfile;
};

export const hidePersonal = function (personal) {
  let Copy = JSON.stringify(personal);
  let deepCopy = JSON.parse(Copy);
  for (let i = 0; i < deepCopy.length; i++) {
    let splitBar = deepCopy[i].personal.split("-");
    let hideLastNum = splitBar[1][1] + "******";
    let result = splitBar[0] + "-" + hideLastNum;
    deepCopy[i].personal = result;
  }
  return deepCopy;
};
