var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hipstafy',
    weWill: "Write a sentence or two, and we'll hipstafy it for you",
    hLicious:"How to be hipsta-licious" });
});


router.post('/submitted', function (req, res, next) {
  res.render('index', {
    weWill: "No way! That worked?"
});
})

module.exports = router;
