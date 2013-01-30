
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/winestore');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback() {
    console.log('connected to monogodb winestore db')
});

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/api/wines', routes.wines);
app.get('/api/wines/:id', routes.wine);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

process.on('exit', function() {
    console.log('process exit')
    mongoose.disconnect(function() {
        console.log('mongo connection closed')
    });
});
