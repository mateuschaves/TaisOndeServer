const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);

io.on('connection', function(socket){
    console.log(socket.id);
});