var express = require('express');
var router = express.Router();
var snippets = require('../lib/snippets.js');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hipstafy',
    weWill: "Write a sentence or two, and we'll hipstafy it for you",
    hLicious:"How to be hipsta-licious" });
});

router.post('/submitted', function(req, res){

    res.render('results', {hipText: req.body.unHipText + snippets[getRandomInt(1,snippets.floor)]});
});



module.exports = router;
