import {
  hidePersonal,
  checkEmail,
  makeTemplate,
  scrapPage,
  sendTemplateToEmail,
} from "./services/user.service.js";
import { User } from "../models/userSchema.js";
import { Token } from "../models/tokenSchema.js";

export class FetchUsers {
  async getUsers(req, res) {
    const userInfo = await User.find();
    res.send(userInfo);
  }
}

export class EnterUser {
  async enterUser(req, res) {
    const email = req.body.email;
    const phone = req.body.phone;

    const findToken = await Token.findOne({ phone });
    const findPhone = await User.findOne({ phone });
    if (!findToken || findToken.isAuth === false) {
      res.statusCode = 422;
      res.send("에러!! 핸드폰 번호가 인증되지 않았습니다.");
      return;
    } else if (findPhone) {
      res.send("이미 회원정보가 존재합니다.");
      return;
    }
    const isValid = checkEmail(email);
    if (!isValid) {
      res.send("check email!");
      return;
    }

    let personal = req.body.personal;
    personal = hidePersonal(personal);

    const prefer = req.body.prefer;
    const name = req.body.name;
    const template = makeTemplate({ name, prefer, phone });
    sendTemplateToEmail(email, template);

    const pwd = req.body.pwd;
    const og = await scrapPage(prefer);
    const userCollection = new User({
      og,
      name,
      email,
      personal,
      prefer,
      pwd,
      phone,
    });
    await userCollection.save();
    const id = await User.findOne({ phone });
    res.send(id._id);
  }
}
