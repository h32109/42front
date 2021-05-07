import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;
import bcrypt from "bcrypt";
import User from "../mongoose/user/user";

export default () => {
  passport.use(new LocalStrategy(
      {
        usernameField: "identifier",
        passwordField: "password",
        session: true,
        passReqToCallback: false
      },
      async (identifier, password, done) => {
        try {
          const exUser = await User.findOne({identifier});
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, {
                message: "Invalid password. Please try again.",
              });
            }
          } else {
            done(null, false, { message: "ID does not exist." });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
