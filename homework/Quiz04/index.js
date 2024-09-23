import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import { profile, hidePersonal } from "./users.js";
import { coffeeList } from "./coffee.js";

const app = express();

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

app.listen(3000);
