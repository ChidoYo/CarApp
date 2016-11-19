var express = require('express');
var router = express.Router();

/* GET agreement page. */
router.get('/', function(req, res, next) {
  res.render('agreement', { title: 'Agreement' });
});

module.exports = router;
