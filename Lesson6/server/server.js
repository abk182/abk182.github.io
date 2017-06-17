var express = require('express');
var application = express();

var path = require('path');

var coffee = require('./coffee.js');

application.get('/hello', function(request, response) {
	response.send('Hello World!');
})

application.use('/', express.static(path.join(__dirname, '../public/')))

application.get('/html', function(request, response) {
	response.sendFile(path.join(__dirname, '../public/index.html'));
})

application.get('/list', function(request, response) {
	response.send(coffee);
})

application.get('/', function(request, response) {
	response.send('404');
})


application.listen(3000, function(){
  console.log('server '+3000);
});
