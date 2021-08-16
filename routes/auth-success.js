var express = require('express');
var router = express.Router();

//GET handler for account-created page.
router.get('/', function(req, res, next) {
  res.render('auth-success');
});

module.exports = router;
