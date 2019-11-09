const express = require('express')
const child_process = require("child_process");
const os=require('os');
const app = express()

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});


app.get('/', function (req, res) {
  
  
    res.send('holaaa!');
  
})

app.get('/whoami', function (req, res) {
  
  var whoami=os.hostname();
  if(whoami){
    
    res.send('yo soy '+ whoami);


  }else{
    res.send('no se quien soy');
  }
})


app.get('/fib', function (req, res) {
  
  var number=req.query.number;
  if(number){
    console.log(number);
    res.send('Fibbonachi para '+number+' es '+ fib(number));


  }else{
    res.send('el parametro number no fue enviado');
  }
})

app.get('/sleep', function (req, res) {
  var min=req.query.min;
  var seg=req.query.seg;
  
  if(min){
    
    var number=min*60;
  } else{
    if(seg){
    
      var number=seg;
    }} 

  if(number){
    console.log(' Entrando a dormir por '+number+ ' segundos');    
    child_process.execSync("sleep "+number);
    
    //sleep.sleep(number*60)
    console.log(' Despierto');
    res.send('Estoy despierto');
  }else{
    res.send('el parametro \'seg\' or \'min\'  (tiempo a dormir en minutos)no fue enviado');
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function fib(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}
