var express = require('express');
var router = express.Router();

/* GET Rent page. */
router.get('/', function(req, res, next) {
  res.render('rent', { title: 'Rent' });
});

module.exports = router;
