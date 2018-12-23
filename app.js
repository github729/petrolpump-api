var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser  = require('body-parser');
var morgan = require('morgan');
var cors = require('cors')
var multer = require("multer");
var app = module.exports = express();



app.use(cors());

app.use(express.static(path.join(__dirname, 'uploads')));

app.set('superSecret', 'globalequityesearchandrevere');

var url = require('url');
app.set('port', 1332);

//End

// use body parser so we can get info from POST and/or URL parameters

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// use morgan to log requests to the console
app.use(morgan('dev'));


// send app to router
require('./router')(app);
http.createServer(app).listen(app.get('port'), function(){  
  console.log('Express server listening on port ' + app.get('port'));
});