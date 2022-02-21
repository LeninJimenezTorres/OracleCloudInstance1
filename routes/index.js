const { Console } = require('console');
const { load } = require('debug/src/browser');
var express = require('express');
const { json } = require('express/lib/response');
const { stringify } = require('querystring');
var router = express.Router();
var comparesDir='public/CompareFiles/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index');
});

router.get('/compare/:t_id/:s1_id/:s2_id', function(req, res, next){
  var datos=[{ "TRACKID": req.params.t_id, "M_SESSIONID_1": req.params.s1_id, "M_SESSIONID_2": req.params.s2_id },
  { "TRACKID": req.params.t_id, "M_SESSIONID_1": req.params.s1_id, "M_SESSIONID_2": req.params.s2_id }
  ];
  var fileName=req.params.t_id+"-"+req.params.s1_id+"-"+req.params.s2_id+".json";
  var output=JSON.stringify(datos);
  //var fs = require('fs');
  /*
  fs.writeFile(comparesDir+fileName, output, function(err, result) {
      if(err) console.log('error', err);
      //else console.log(output);
  });
  */
  remoteDir='https://apigw.withoracle.cloud/formulaai/carData/12033049017621259205/1';
  remoteDom='https://apigw.withoracle.cloud/formulaai/carData/'

  fs = require('fs');

  open=require('open');
  //open(remoteDom+req.params.s1_id+'/1');
  //open(remoteDom+req.params.s2_id+'/1');
  
  const url1 = remoteDom+req.params.s1_id+'/1';
  const url2 = remoteDom+req.params.s2_id+'/1';
  var M_FRAME=[], M_FRAME1=[],M_FRAME2=[], M_TIMESTAMP=[], M_TIMESTAMP1=[], M_TIMESTAMP2=[], M_CURRENT_LAP=[], M_CURRENT_LAP1=[],  M_CURRENT_LAP2=[], 
      M_SECTOR=[], M_SECTOR1=[], M_SECTOR2=[], M_LAST_LAP_TIME_IN_MS=[], M_LAST_LAP_TIME_IN_MS1=[], M_LAST_LAP_TIME_IN_MS2=[], M_SPEED=[], M_SPEED1=[], M_SPEED2=[], 
      M_THROTTLE=[], M_THROTTLE1=[], M_THROTTLE2=[], M_STEER=[], M_STEER1=[], M_STEER2=[], M_BRAKE=[], M_BRAKE1=[], M_BRAKE2=[], M_GEAR=[], M_GEAR1=[], M_GEAR2=[],   
      M_ENGINERPM=[], M_ENGINERPM1=[], M_ENGINERPM2=[], M_YAW=[], M_YAW1=[], M_YAW2=[], M_PITCH=[], M_PITCH1=[], M_PITCH2=[], M_ROLL=[], M_ROLL1=[], M_ROLL2=[], 
      M_LAP_DISTANCE=[], M_LAP_DISTANCE1=[], M_LAP_DISTANCE2=[], M_WORLDPOSX=[], M_WORLDPOSX1=[], M_WORLDPOSX2=[], M_WORLDPOSY=[], M_WORLDPOSY1=[], M_WORLDPOSY2=[], 
      M_WORLDPOSZ=[], M_WORLDPOSZ1=[], M_WORLDPOSZ2=[], M_WORLDFORWARDDIRX=[], M_WORLDFORWARDDIRX1=[], M_WORLDFORWARDDIRX2=[],
      M_WORLDFORWARDDIRY=[], M_WORLDFORWARDDIRY1=[], M_WORLDFORWARDDIRY2=[], M_WORLDFORWARDDIRZ=[], M_WORLDFORWARDDIRZ1=[], M_WORLDFORWARDDIRZ2=[], 
      M_WORLDRIGHTDIRX=[], M_WORLDRIGHTDIRX1=[], M_WORLDRIGHTDIRX2=[], M_WORLDRIGHTDIRY=[], M_WORLDRIGHTDIRY1=[], M_WORLDRIGHTDIRY2=[], 
      M_WORLDRIGHTDIRZ=[], M_WORLDRIGHTDIRZ1=[], M_WORLDRIGHTDIRZ2=[], DRIVER=[], DRIVER1=[], DRIVER2=[];
  var json1, json2;
  var comparation=[];
  console.log('URL1 1: '+url1);
  console.log('URL1 2: '+url2);
  
  var https = require('https');
  https.get(url1,(res) => {
    let body1 = "";
    res.on("data", (chunk) => {
        body1 += chunk;
    });
    res.on("end", () => {
        try {
            json1 = JSON.parse(body1);
            console.log("Array 1 guardado----------------------------------");
            for (var i=0; i<json1.length;i++){
              //M_FRAME.push([0, json1[i].M_FRAME]);
              M_FRAME1[i]=json1[i].M_FRAME;
              M_TIMESTAMP1[i]=json1[i].M_TIMESTAMP;
              M_CURRENT_LAP1[i]=json1[i].M_CURRENT_LAP;
              M_SECTOR1[i]=json1[i].M_SECTOR;
              M_LAST_LAP_TIME_IN_MS1[i]=json1[i].M_LAST_LAP_TIME_IN_MS;
              M_SPEED1[i]=json1[i].M_SPEED;
              M_THROTTLE1[i]=json1[i].M_THROTTLE;
              M_STEER1[i]=json1[i].M_STEER;
              M_BRAKE1[i]=json1[i].M_BRAKE;
              M_GEAR1[i]=json1[i].M_GEAR;
              M_ENGINERPM1[i]=json1[i].M_ENGINERPM;
              M_YAW1[i]=json1[i].M_YAW;
              M_PITCH1[i]=json1[i].M_PITCH;
              M_ROLL1[i]=json1[i].M_ROLL;
              M_LAP_DISTANCE1[i]=json1[i].M_LAP_DISTANCE;
              M_WORLDPOSX1[i]=json1[i].M_WORLDPOSX;
              M_WORLDPOSY1[i]=json1[i].M_WORLDPOSY;
              M_WORLDPOSZ1[i]=json1[i].M_WORLDPOSZ;
              M_WORLDFORWARDDIRX1[i]=json1[i].M_WORLDFORWARDDIRX;
              M_WORLDFORWARDDIRY1[i]=json1[i].M_WORLDFORWARDDIRY;
              M_WORLDFORWARDDIRZ1[i]=json1[i].M_WORLDFORWARDDIRZ;
              M_WORLDRIGHTDIRX1[i]=json1[i].M_WORLDRIGHTDIRX;
              M_WORLDRIGHTDIRY1[i]=json1[i].M_WORLDRIGHTDIRY;
              M_WORLDRIGHTDIRZ1[i]=json1[i].M_WORLDRIGHTDIRZ;
              DRIVER1[i]=json1[i].DRIVER;
              //console.log(json[i].M_FRAME);
            }
        } catch (error) {
            console.error(error.message);
        };
    });
  }).on("error", (error) => {console.error(error.message);});
  
  console.log('----------------------------------------------------------------------------------------------------------------');
  
  var limite;

  var https = require('https');
  https.get(url2,(res) => {
    let body2 = "";
    res.on("data", (chunk) => {
        body2 += chunk;
    });
    res.on("end", () => {
        try {
            json2 = JSON.parse(body2);
            console.log("Array 2 guardado----------------------------------");
            console.log('Longitud JSON1: '+json1.length);
            if(json1.length>json2.length){
              limite=json2.length;
            } 
            else if (json1.length<=json2.length){
              limite=json1.length;
            }
            for (let i=0; i<limite;i++){
              M_FRAME2[i]=json2[i].M_FRAME;
              M_TIMESTAMP2[i]=json2[i].M_TIMESTAMP;
              M_CURRENT_LAP2[i]=json2[i].M_CURRENT_LAP;
              M_SECTOR2[i]=json2[i].M_SECTOR;
              M_LAST_LAP_TIME_IN_MS2[i]=json2[i].M_LAST_LAP_TIME_IN_MS;
              M_SPEED2[i]=json2[i].M_SPEED;
              M_THROTTLE2[i]=json2[i].M_THROTTLE;
              M_STEER2[i]=json2[i].M_STEER;
              M_BRAKE2[i]=json2[i].M_BRAKE;
              M_GEAR2[i]=json2[i].M_GEAR;
              M_ENGINERPM2[i]=json2[i].M_ENGINERPM;
              M_YAW2[i]=json2[i].M_YAW;
              M_PITCH2[i]=json2[i].M_PITCH;
              M_ROLL2[i]=json2[i].M_ROLL;
              M_LAP_DISTANCE2[i]=json2[i].M_LAP_DISTANCE;
              M_WORLDPOSX2[i]=json2[i].M_WORLDPOSX;
              M_WORLDPOSY2[i]=json2[i].M_WORLDPOSY;
              M_WORLDPOSZ2[i]=json2[i].M_WORLDPOSZ;
              M_WORLDFORWARDDIRX2[i]=json2[i].M_WORLDFORWARDDIRX;
              M_WORLDFORWARDDIRY2[i]=json2[i].M_WORLDFORWARDDIRY;
              M_WORLDFORWARDDIRZ2[i]=json2[i].M_WORLDFORWARDDIRZ;
              M_WORLDRIGHTDIRX2[i]=json2[i].M_WORLDRIGHTDIRX;
              M_WORLDRIGHTDIRY2[i]=json2[i].M_WORLDRIGHTDIRY;
              M_WORLDRIGHTDIRZ2[i]=json2[i].M_WORLDRIGHTDIRZ;
              DRIVER2[i]=json2[i].DRIVER;
              //console.log(json2[i].M_FRAME);
            }
            for (var h=0; h<limite;h++){
              //console.log('Valor '+i+':'+(M_FRAME[0,i][1]) +'-'+ (M_FRAME[1,i])[0]);
              comparation.push(
                {
                  'M_FRAME': [M_FRAME1[h], M_FRAME2[h]], 
                  'M_TIMESTAMP': [M_TIMESTAMP1[h], M_TIMESTAMP2[h]], 
                  'M_CURRENT_LAP': [M_CURRENT_LAP1[h], M_CURRENT_LAP2[h]], 
                  'M_SECTOR': [M_SECTOR1[h], M_SECTOR2[h]], 
                  'M_LAST_LAP_TIME_IN_MS': [M_LAST_LAP_TIME_IN_MS1[h], M_LAST_LAP_TIME_IN_MS2[h]], 
                  'M_SPEED': [M_SPEED1[h], M_SPEED2[h]], 
                  'M_THROTTLE': [M_THROTTLE1[h], M_THROTTLE2[h]], 
                  'M_STEER': [M_STEER1[h], M_STEER2[h]], 
                  'M_BRAKE': [M_BRAKE1[h], M_BRAKE2[h]], 
                  'M_GEAR': [M_GEAR1[h], M_GEAR2[h]], 
                  'M_ENGINERPM': [M_ENGINERPM1[h], M_ENGINERPM2[h]], 
                  'M_YAW': [M_YAW1[h], M_YAW2[h]], 
                  'M_PITCH': [M_PITCH1[h], M_PITCH2[h]], 
                  'M_ROLL': [M_ROLL1[h], M_ROLL2[h]], 
                  'M_LAP_DISTANCE': [M_LAP_DISTANCE1[h], M_LAP_DISTANCE2[h]], 
                  'M_WORLDPOSX': [M_WORLDPOSX1[h], M_WORLDPOSX2[h]], 
                  'M_WORLDPOSY': [M_WORLDPOSY1[h], M_WORLDPOSY2[h]], 
                  'M_WORLDPOSZ': [M_WORLDPOSZ1[h], M_WORLDPOSZ2[h]], 
                  'M_WORLDFORWARDDIRX': [M_WORLDFORWARDDIRX1[h], M_WORLDFORWARDDIRX2[h]], 
                  'M_WORLDFORWARDDIRY': [M_WORLDFORWARDDIRY1[h], M_WORLDFORWARDDIRY2[h]], 
                  'M_WORLDFORWARDDIRZ': [M_WORLDFORWARDDIRZ1[h], M_WORLDFORWARDDIRZ2[h]], 
                  'M_WORLDRIGHTDIRX': [M_WORLDRIGHTDIRX1[h], M_WORLDRIGHTDIRX2[h]], 
                  'M_WORLDRIGHTDIRY': [M_WORLDRIGHTDIRY1[h], M_WORLDRIGHTDIRY2[h]], 
                  'M_WORLDRIGHTDIRZ': [M_WORLDRIGHTDIRZ1[h], M_WORLDRIGHTDIRZ2[h]], 
                  'DRIVER': [DRIVER1[h], DRIVER2[h]],
                }
              );
            }
            console.log('OBJECT CREATED SUCCESSFULLY');
            //console.log(comparation);
            
            //var fs = require('fs');
            fs.writeFile(comparesDir+fileName, JSON.stringify(comparation), function(err, result) {
              if(err) console.log('error', err);
              else { 
                console.log('FILE CREATED SUCCESSFULLY');
                }
            });

            var filePublic='http://localhost:3000/CompareFiles/'+fileName;
            open=require('open');
            open(filePublic);
          
        } catch (error) {
            console.error(error.message);
        };
    });
  }).on("error", (error) => {console.error(error.message);});

  
  //fs.readFile(require(remoteDom+req.params.s1_id+'/1'),'utf8',function (err,data) {
  //archivo=fs.readFile(comparesDir+fileName, 'utf8', function (err,data) {
  //fs.readFile(comparesDir+'1.json', 'utf8', function (err,data) {
    //if (err) {
      //return console.log(err);
    //}
    //const elemento=JSON.parse(data);
    //const elemento=JSON.parse('[{"foo": "verga","goo": 2},{"foo": "verga","goo": 2}]');
    //console.log("READING: "+elemento);
    //for (var i=0; i<elemento.length;i++){
    //  console.log("READING: "+elemento[i].M_FRAME);
    //}
    //console.log("READING: "+elemento[0]);
    //dataTratada=JSON.stringify(data);
    //console.log('Directorio: '+ comparesDir+fileName);
    //window.open(comparesDir+fileName);
    //console.log('************************************************** NAME FILE: '+fileName);
    //console.log('Valor a: ' + data[7]);
    //console.log('Valor b: ' + dataTratada[10]);

    //var Otro=JSON.parse(data);
    //console.log("Archivo JSON: "+Otro);
    
  //});
  //Otro=JSON.parse(archivo);
  //console.log("Archivo JSON: "+Otro);
  //console.log("Archivo JSON 0 : "+Otro[0]);


  //let jsonData = (remoteDom+req.params.s1_id+'/1');
  //console.log(jsonData);
  //var requireFromUrl = require('require-from-url/sync');
  //var salida=requireFromUrl(remoteDir);
  //let schema = JSON.parse(salida);
  //console.log(schema);
  
  var filePublic='http://localhost:3000/CompareFiles/'+fileName;
  //open=require('open');
  //open(filePublic);

  res.render('layouts/track',{pathOut: req.params.t_id+"-"+req.params.s1_id+"-"+req.params.s2_id,
                              fileDir:filePublic,
                              jsonFile:JSON.stringify(comparation)});
})

    //window.open(direccion, '_blank');

module.exports = router;
