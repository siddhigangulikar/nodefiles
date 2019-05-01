//SPDX-License-Identifier: Apache-2.0
var cors = require('cors');
var bodyParser=require("body-parser");
var cert = require('./controller.js');

var urlencodedParser=bodyParser.urlencoded({extended: false});
module.exports = function(app){

  app.get('/get_cert/:id', cors(), function(req, res){
    cert.get_cert(req, res);
  });
  app.post('/addNewCertificate', cors(), urlencodedParser, function(req, res){
    cert.addNewCertificate(req, res);
  });
  app.get('/get_all_cert', cors(), function(req, res){
    cert.get_all_cert(req, res);
  });
  app.post('/transfer_cert/:certificate_id/:transferName', cors(), function(req, res){
    cert.transfer_cert(req, res);
  });
  app.get('/get_student/:id', cors(), function(req, res){
    cert.get_student(req, res);
  });
  app.post('/addNewStudent', cors(), function(req, res){
    cert.addNewStudent(req, res);
  });
  app.get('/Login/:id1/:id2', cors(), function(req, res){
    cert.Login(req, res);
  });
}
