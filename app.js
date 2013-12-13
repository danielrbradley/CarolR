var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , static = require('node-static');

app.listen(5555);

var file = new(static.Server)('.');

function handler (req, res) {
  file.serve(req, res);
}

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('play note', function(data) {
	io.sockets.emit('play note', data);
  });
});
