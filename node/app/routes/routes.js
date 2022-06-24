module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/addUser", user.create);

  router.post("/singVer",user.singVer);

  router.get("/getUser",user.getUser);

  router.put("/updateUser/:id", user.update);

  app.use("/api", router);
};
