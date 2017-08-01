var express = require('express'),
    app = express(),
    path = require('path');
    bodyParser = require('body-parser');// достает req.body

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname,'../public/')));

app.get('/list', require('./routes/route1.js'));
app.get('/videos', require('./routes/route1.js'));
app.post('/add_user', require('./routes/route1.js'));
app.delete('/delete/:id', require('./routes/route1.js'));
app.put('/put/:id', require('./routes/route1.js'));
app.get('*',(req,res)=> {res.send('Не найдено ничего')});

app.listen(3000,console.log('Server on 3000'));
