import express, { json } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import { profile, hidePersonal } from "./users.js";
import { coffeeList } from "./coffee.js";
import { checkPhoneNum, getTokenMake } from "./phone.js";
import { checkEmail, makeTemplate, sendTemplateToEmail } from "./email.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/myApi", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/users", function (req, res) {
  const usersProfile = profile();
  const userProfileHidePersonal = hidePersonal(usersProfile);
  res.send(userProfileHidePersonal);
  console.log(usersProfile);
});

app.get("/starbucks", function (req, res) {
  const coffeeLists = coffeeList();
  res.send(coffeeLists);
});
// 블로그에 적기
app.post("/phone", function (req, res) {
  const phoneNum = req.body.phoneNumber;
  const isValid = checkPhoneNum(phoneNum);
  if (!isValid) {
    console.log("휴대폰 번호를 확인해주세요.");
    return;
  }

  getTokenMake();
  res.send("성공");
});

app.post("/signup", function (req, res) {
  const { name, email, prefer, pwd, personal, phone } = req.body;

  const isValid = checkEmail(email);
  if (!isValid) {
    res.send("이메일을 확인해주세요.");
    return;
  }
  const template = makeTemplate(name, prefer, phone);
  console.log(template);
  sendTemplateToEmail(email, template);
});

app.listen(3000);
