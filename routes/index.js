var express = require('express');
var router = express.Router();
var comparesDir='public/CompareFiles/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index');
});

router.get('/compare/:t_id/:s1_id/:s2_id', function(req, res, next){
  var datos={
    "TRACKID": req.params.t_id,
    "M_SESSIONID_1": req.params.s1_id,
    "M_SESSIONID_2": req.params.s2_id,
  };
  var fileName=req.params.t_id+"-"+req.params.s1_id+"-"+req.params.s2_id+".json";
  var output=JSON.stringify(datos);
  var fs = require('fs');
  fs.writeFile(comparesDir+fileName, output, function(err, result) {
      if(err) console.log('error', err);
      //else console.log(output);
  });

  fs = require('fs')
  fs.readFile(comparesDir+fileName, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log("READING: ");
    console.log(data);
  });

  res.render('layouts/track',{pathOut: req.params.t_id+req.params.s1_id+req.params.s2_id});
})

router.get('/results/', function(req, res, next){


});
module.exports = router;
