const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', s => {
    console.log(`Dale meu perigoso ${s.id} !`);
});

server.listen(3000, () => {
    console.log(`Servidor iniciou na porta ${3000}`);
});