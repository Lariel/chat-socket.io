var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('servidor rodando...');

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Conectados: %s clientes conectados no servidor', connections.length);
    console.log('Logados: %s clientes logados', users.length);
    console.log('------------------------------------------');

    // desconectados
    socket.on('disconnect', function(data){
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();

        connections.splice(connections.indexOf(socket),1);
        console.log('Conectados: %s clientes conectados no servidor', connections.length);
        console.log('Logados: %s clientes logados', users.length);
        console.log('------------------------------------------');
    });

    // enviar mensagens
    socket.on('send message', function(data){
        // teste: console.log(data);
        io.sockets.emit('new message', {msg: data, user: socket.username}); 
    });

    // Sign Up e Log In
    socket.on('new user', function(data, callback){
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    // login

    function updateUsernames() {
        io.sockets.emit('get users', users);
        console.log('Conectados: %s clientes conectados no servidor', connections.length);
        console.log('Logados: %s clientes logados', users.length);
        console.log('------------------------------------------');
    }

});