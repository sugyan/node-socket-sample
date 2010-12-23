var app = require('express').createServer();

app.get('/', function(req, res) {
    console.log('/');
    res.send('hello world');
});

app.listen(3000);
