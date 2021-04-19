const express = require("express");
const User = require("../mongoose/user");

const router = express.Router();

router.get("/", async (req, res, next) => {
  /*const users = await User.find({});
    res.render('mongoose', { users });*/
  // res.send('Hello World!')
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
  const users = await User.find({});
  res.send(users);
});

module.exports = router;
