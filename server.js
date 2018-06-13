var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('servidor rodando');

app.get('/',function(req, res){
    res.sendfile(__dirname + '/index.html');
})

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Conectados: %s clietes conectados', connections.length);

    // desconectados
    connections.splice(connections.indexOf(socket),1);
    console.log('Desconectados: %s clientes conectados', connections.length);
});