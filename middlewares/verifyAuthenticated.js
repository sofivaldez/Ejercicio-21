const passport = require("passport");

module.exports = (req, res, next) => {
  // console.log(req);
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    next();
  }
};
