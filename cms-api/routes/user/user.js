import express from "express";
import Profile from "../../mongoose/user/profile";
import User from "../../mongoose/user/user";
import passport from "passport";

const userRouter = express.Router();

userRouter
  .post("/join", async (req, res, next) => {
    try {
      const {
        firstName,
        lastName,
        identifier,
        password,
        birthday,
        gender,
      } = req.body;
      const profile = await Profile.create({
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        gender: gender,
      });
      console.log(profile);
      const user = await User.create({
        identifier: identifier,
        password: password,
        profile: profile,
      });
      console.log(user);
      res.send(201); //.json(profile);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post("/login", passport.authenticate("local", {}), (req, res) => {
    res.send(200);
  });

export default userRouter;
