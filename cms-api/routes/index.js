import express from "express";
import User from "../mongoose/user";

const router = express.Router();

router.get("/", async (req, res, next) => {
  /*const users = await User.find({});
    res.render('mongoose', { users });*/
  // res.send('Hello World!')
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
  const users = await User.find({});
  res.send(users);
});

export default router;
