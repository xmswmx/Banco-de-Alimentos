// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';


var loopback = require('loopback');
var boot = require('loopback-boot');
var cors = require('cors');
var nodemailer = require('nodemailer');

var app = module.exports = loopback();


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
app.use(cors({origin: "*"}));

app.post("/sendmail",(req,res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log('Se envio el correo y la id es ${info.messageId}');
    res.send(info);   
  })
});
app.get("/sendmail",(req,res) => {
  res.send("<h1>Funciona </h1>")  
});

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

async function sendMail(user,callback){
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "balpiaw2019@gmail.com",
      pass: "balpiaw2019"
    }
  });

  let mailOptions = {
    from: "BALP",
    to: "balpiaw2019@gmail.com",
    subject: "Un correo de prueba",
    html: '<h1>Funciona</h1>'
  }

  let info = await transporter.sendMail(mailOptions);

  callback(info);
}