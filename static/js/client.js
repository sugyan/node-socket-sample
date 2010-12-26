var socket = new io.Socket(null, { port: port });
socket.connect();
socket.on('connect', function() {
    console.log('connect');
}) 
socket.on('message', function(msg) {
    console.log('message: ' + msg);
}) 
socket.on('disconnect', function(){
    console.log('disconnect');
}) 

function onSubmit() {
    socket.send(document.getElementById('message').value);
    return false;
}
