import passport from "passport";
import local from "./localStrategy";
import User from "../mongoose/user/user";

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((identifier, done) => {
    User.findOne({
      where: { identifier },
    })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
  local();
};
