var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var port = 8080;
var players = {};

// instancing
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', port);

//
app.use('/public', express.static(__dirname + "/public"));

server.listen(port, function() {
    console.log("im listening");
});

app.get("/", function (requrest, response) {
    response.sendFile(path.join(__dirname, "landing.html"));
});