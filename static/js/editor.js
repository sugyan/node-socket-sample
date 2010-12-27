$(function() {
    var socket = new io.Socket(null, { port: port });
    socket.connect();
    socket.on('connect', function() {
        console.log('connect');
    });
    socket.on('disconnect', function(){
        console.log('disconnect');
    });

    var code_prev = $('#code').val();
    var loop = function() {
        var code = $('#code').val();
        if (code_prev != code) {
            socket.send(code);
            code_prev = code;
        }
        setTimeout(loop, 100);
    };
    loop();
});
