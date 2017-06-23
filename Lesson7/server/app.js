var express = require('express');
var path = require('path');
var app = express();

//res тобишь response (отклик)
app.get('/hello', function(req,res){
  res.send('Hello world');
  console.log('Hello World!');
});
app.use('/html', express.static(path.join(__dirname, '../public')));


var userList = require('./userlist.js');

app.get('/list', function (req, res) {
  res.send(userList);
  console.log(userList);
});

// вернет просто файл
// app.get('/home', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../public/js/main.js'));
// })

app.listen(3000, function(){
  console.log('Server started on 3000');
});
