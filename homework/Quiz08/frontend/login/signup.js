// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  const phoneNum =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  // 블로그에 적기
  axios
    .post("http://localhost:3000/phone", {
      phoneNumber: phoneNum,
    })
    .then((res) => {
      console.log(res.data);
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const phone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  const personal = document.getElementById("SignupPersonal").value;
  const prefer = document.getElementById("SignupPrefer").value;
  const email = document.getElementById("SignupEmail").value;
  const pwd = document.getElementById("SignupPwd").value;

  axios
    .post("http://localhost:3000/signup", {
      name,
      personal,
      prefer,
      email,
      phone,
      pwd,
    })
    .then((res) => {
      console.log(res);
    });

  console.log("회원 가입 이메일 전송");
};
