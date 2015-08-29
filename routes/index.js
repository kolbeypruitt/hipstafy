var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hipstafy',
    weWill: "Write a sentence or two, and we'll hipstafy it for you" });
});


router.post('/foo/bar', function (req, res, next) {
  if (req.body == {emotion: "happy", level: "very"}) {
    res.render('index', {title: "No way! That worked?"});
  }
})

module.exports = router;
