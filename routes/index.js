const express = require("express");
const router = express.Router();
const passport = require("passport");

const user_controller = require("../controllers/user_controller.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Home" });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Sign up" });
});

router.post("/signup", user_controller.signup_post);

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Log in" });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = router;
