//RUN CODE: C:\Users\tonyl\github\bootcamp_local\handlebarExpressTutorialsGitHub\nodejs-basics-tutorial\07-get-post\bin> node www

//Browser: http://localhost:8000/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});

//http://localhost:8000/test/5
router.get('/test/:id', function(req, res, next) {
  var myId = req.params.id;
  console.log("ID2* = "+myId);
  res.render('test', {output: myId});
});

///http://localhost:8000
//post typically writes to db, then redirects
router.post('/api/test/submit', function(req, res, next) {
  var id = req.body.id;
  console.log("ID1 = "+id);
  res.redirect('/test/'+id);
});

module.exports = router;
