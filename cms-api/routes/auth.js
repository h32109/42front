import express from "express";
import Profile from "../mongoose/user/profile"
import User from "../mongoose/user/user"
import bcrypt from 'bcrypt'
import passport from "passport"
import { isLoggedIn, isNotLoggedIn } from '../middelwares/authmiddleware'

const userRouter = express.Router()

userRouter.post("/join", isNotLoggedIn, async (req, res, next)=>{
    try {
        const {firstName, lastName, identifier, password, birthday, gender} = req.body
        const exUser = await User.findOne({ where: { identifier } });
        if (exUser) {
            return res.send(500);
        }
        const hash = await bcrypt.hashSync(password, 12);
        const session = await User.startSession();
        await session.withTransaction(async ()=>{
            const profile = await Profile.create({
                firstName: firstName,
                lastName: lastName,
                birthday: birthday,
                gender: gender,
            });
            await User.create({
                identifier: identifier,
                password: hash,
                profile: profile
            })
        })
        session.endSession()
        res.sendStatus(201)//.json(profile);
    } catch (err) {
        console.error(err);
        next(err);
    }
})

userRouter.post('/login', isNotLoggedIn, async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.sendStatus(500);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.sendStatus(200);
        });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙여야한다.
});

userRouter.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.sendStatus(200);
});

// 페이지 연동시 isLoggedIn 필요
userRouter.post('/verify', async (req, res, next)=>{
    const { code, email } = req.body;
    const user = await User.findOne({identifier: email})
    if (user.certificationNumber === code){
        if (!user.certificationNumber){
            await User.updateOne(
                {identifier: email},
                {$set:
                        {isVerified: true}
                }
            )
        }
        res.sendStatus(200)
    }else {
        res.status(204).json({message: "wrong code."})
    }
})

userRouter.post('/find', isNotLoggedIn, async (req, res, next)=>{
    const {email} = req.body
    const user = await User.find({identifier: email})
    if (user){
        res.sendStatus(200)
    }else{
        res.status(204).json({message: "user not found."})
    }
})

export default userRouter