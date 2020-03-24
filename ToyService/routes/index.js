const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const toys = require('../modules/toys.js');
const url = require('url');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'ToyService' });
});

router.get('/toyservice/all/:location', (request, response, next) => {
  const location = request.params.location.toLowerCase();
  console.log('we made it into toyservice/:location' + location);
  let get_params = url.parse(request.url, true).query;
  if (Object.keys(get_params).length == 0) {
    console.log('no params');
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(toys.getPrice(location)));
  } 
});
// example for using path variable
// router.get('/toyservice/:lastname', (request, response, next) => {
//   const param = request.params.lastname;
//   console.log('got into contact/:lastname ' + param);
//   const result = contacts.query_by_arg(
//     "lastname", param);
//   if (result) {
//     response.setHeader('content-type', 'application/json');
//     response.end(JSON.stringify(result));
//   } else {
//     next(createError(404));
//   }
// });
module.exports = router;