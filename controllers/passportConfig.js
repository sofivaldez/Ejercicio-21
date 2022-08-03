const LocalStrategy = require("passport-local");
const sequelize = require("sequelize")
const bcrypt = require("bcrypt");

module.export = function initialize(passport) {
  const autenticacion = passport.use(
    new LocalStrategy(function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
    }),
  );
};
