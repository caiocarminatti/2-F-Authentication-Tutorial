var express = require("express");
var router = express.Router();

//Import user model into router
const User = require("../models/user");

//Handle users that are not authenticated.
function IsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

//GET handler for 2f authentication page.
router.get("/", IsLoggedIn, function (req, res, next) {
  res.render("2f-authentication", {
    title: "Authentication Step",
    user: req.user,
  });
});

//POST handler for 2f authentication page.
router.post("/", IsLoggedIn, function (req, res, next) {
  res.render("2f-authentication", {
    title: "Authentication Step",
    user: req.user,
  });
});

//GET handler for 2f authentication page/email.
router.get("/email", IsLoggedIn, function (req, res, next) {
  res.redirect("/2f-authentication");
});

//GET handler for 2f authentication page/sms.
router.get("/sms", IsLoggedIn, function (req, res, next) {
  res.redirect ("/2f-authentication");
});

module.exports = router;