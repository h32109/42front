import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";
import connect from "./mongoose";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";

dotenv.config({ path: __dirname + "/.env" }); // .env 파일 읽기
import router from "./routes";
import passportConfig from "./passport";

const app = express(); // 서버 선언
passportConfig();
app.set("port", process.env.PORT || 3000); // application에 port 환경변수 설정하기

connect(); // mongoDB 연결

// CORS 허용
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(morgan("dev")); // develop 형식으로 console log 남기기
app.use(express.static(path.join(__dirname, "public"))); // static폴더 지정
app.use(express.json()); // json파서 사용
app.use(express.urlencoded({ extended: false })); // 동적 라우팅을 위한 urlencorder 사용
app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키파싱을 위한 쿠키파서 사용(파라미터에 쿠키 암호화 암호)
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
); // 세션 사용 , cookie: 세션쿠키사용
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use((req, res, next) => {
  const error = new Error(`Page not found`);
  error.status = 404;
  next(error);
}); // 라우터가 없으면 404 페이지 처리

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
}); // 500 에러 처리

app.listen(app.get("port"), () => {
  console.log(`app is running on ${app.get("port")}!`);
});
