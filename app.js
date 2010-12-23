var app = require('express').createServer();
var ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('view options', { layout: false });

app.get('/', function(req, res) {
    console.log('/');
    res.render('index', '');
});

app.listen(3000);
