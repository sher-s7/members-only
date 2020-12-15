const User = require("../models/users");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.signup_post = function (req, res, next) {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) next(err);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
};

exports.login_post = function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  });
  res.end()
};
