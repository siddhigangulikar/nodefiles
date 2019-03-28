var cors = require('cors');               //cross organisational resource sharing
var gc = require('./getcert.js');         // filename for function get_cert
var tc = require('./transfercert.js');
var gs = require('./getstudent.js');    // filename for function transfer_cert

module.exports = function(app){
    app.get('/certificates/:id', cors(), function(req, res){
    gc.get_cert(req, res);
  });
  app.post('/certificates/:certificate_id/transferName', cors(), function(req, res){
    tc.transfer_cert(req, res);
  });
  app.get('/certificates/:PR_no', cors(), function(req, res){
    gs.get_student(req, res);
  });

}