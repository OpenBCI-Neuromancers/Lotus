var express = require('express');
var morgan = require('morgan');
var port = 3000;
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.listen(port, function(){
  console.log('Now listening on port '+port);
});