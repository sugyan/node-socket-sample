var express = require('express');
var app = express.createServer();
var ejs = require('ejs');
var io  = require('socket.io');

var port = 3000;
app.configure(function(){
    app.use(express.staticProvider(__dirname + '/static'));
});
app.set('view engine', 'ejs');
app.set('view options', { layout: false });

app.get('/', function(req, res) {
    console.log('/');
    res.render('index', { locals: { port: port } });
});
app.listen(port);

var socket = io.listen(app);
socket.on('connection', function(client) {
    client.on('message', function(msg) {
        client.send(msg);
        client.broadcast(msg);
    });
    client.on('disconnect', function() {
        console.log('disconnect');
    });
});

console.log('Server running at http://127.0.0.1:' + port + '/');
