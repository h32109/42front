import express from "express";
import User from "../mongoose/user";

const router = express.Router();

router
    .get("/", async (req, res, next) => {
      /*const users = await User.find({});
        res.render('mongoose', { users });*/
      const users = await User.find({});
      res.send(users);
    })
    .post("/",async (req, res, next) => {
      try {
        const user = await User.create({
          name: req.body.name,
          email: req.body.email,
          id: req.body.id,
          password: req.body.password,
        });
        console.log(user);
        res.status(201).json(user);
      } catch (err) {
        console.error(err);
        next(err);
      }
    });


export default router;
