var express = require('express');
var router = express.Router();
var data   = require("../data.json");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', redirectionURL: "/new"});
});
router.get('/new', function(req, res, next){
  let randomID = Math.floor(Math.random() * 1000);
  let randomPerson = data[randomID];
  res.render('new', { title: "Crear persona", person: randomPerson});
});
router.get('/info', function(req, res, next){
  res.render('info', { title: "Informacion" });
});
module.exports = router;
