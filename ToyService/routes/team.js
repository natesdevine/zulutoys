var express = require('express');
var router = express.Router();
const makeError = require('http-errors');
const team = require('../modules/leapteam')
const url = require('url')

/* GET team listing. */
router.get('/', function(req, res, next) {
  let param_getter = url.parse(req.url, true).query;
  console.log("i am in");
  if (Object.keys(param_getter).length==0) {
    console.log("no params found");
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(team.list()));
  }

});

module.exports = router;