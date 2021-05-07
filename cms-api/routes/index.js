import express from "express";
import User from "../mongoose/user/user";

const router = express.Router();

router
    .get("/", async (req, res, next) => {
      /*const users = await User.find({});
        res.render('mongoose', { users });*/
      // const users = await User.find({});
      // res.send(users);
    })
    .post("/",async (req, res, next) => {
    });


export default router;
