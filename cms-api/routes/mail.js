import express from "express"
import nodemailer from "nodemailer"
import User from "../mongoose/user/user"
import { isLoggedIn, isNotLoggedIn } from "../middelwares/authmiddleware"

const mailRouter = express.Router()

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.ETHEREAL_EMAIL, // generated ethereal user
        pass: process.env.ETHEREAL_PASSWORD, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
});

//홈페이지 연결 시 isLoggedIn 미들웨어 추가해야 함
mailRouter.post('/verify', async (req, res, next)=>{
    const {email} = req.body
    const authCode = Math.random().toString().substr(2,6);

    await User.updateOne(
        {identifier: email},
        {$set:
                {certificationNumber: authCode}
        }
    )
    const mail = await transporter.sendMail({
        from: "42front@42maru.com", // sender address
        to: email, // list of receivers
        subject: "42front 페이지 인증 메일", // Subject line
        html: `<html>\n` +
            `<body>\n` +
            `  <div>\n` +
            `    <p style='color:black'>회원 가입을 위한 인증번호 입니다.</p>\n` +
            `    <p style='color:black'>아래의 인증 번호를 입력하여 인증을 완료해주세요.</p>\n` +
            `    <h2>${authCode}</h2>\n` +
            `  </div>\n` +
            `</body>\n` +
            `</html>`, // html body
    });
    res.status(200).json({url: nodemailer.getTestMessageUrl(mail)});
})

//홈페이지 연결 시 isLoggedIn 미들웨어 추가해야 함
mailRouter.post('/find', async (req, res, next)=>{
    const {email} = req.body
    const authCode = Math.random().toString().substr(2,6);
    await User.updateOne(
        {identifier: email},
        {$set:
                {certificationNumber: authCode}
        }
    )
    const mail = await transporter.sendMail({
        from: "42front@42maru.com", // sender address
        to: email, // list of receivers
        subject: "42front 페이지 비밀번호 분실 메일", // Subject line
        html: `<html>\n` +
            `<body>\n` +
            `  <div>\n` +
            `    <p style='color:black'>비밀번호를 찾기 위한 인증번호 입니다.</p>\n` +
            `    <p style='color:black'>아래의 인증 번호를 입력하여 인증을 완료해주세요.</p>\n` +
            `    <h2>${authCode}</h2>\n` +
            `  </div>\n` +
            `</body>\n` +
            `</html>`, // html body
    });
    res.status(200).json({url: nodemailer.getTestMessageUrl(mail)});
})

export default mailRouter