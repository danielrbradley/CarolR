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
  socket.on('programChange', function (data) {
      console.log('programChange ' + data);
	io.sockets.emit('programChange', data);
  });
  socket.on('setVolume', function (data) {
      console.log('setVolume ' + data);
	io.sockets.emit('setVolume', data);
  });
  socket.on('noteOn', function (data) {
      console.log('noteOn ' + data);
	io.sockets.emit('noteOn', data);
  });
  socket.on('noteOff', function (data) {
      console.log('noteOff ' + data);
	io.sockets.emit('noteOff', data);
  });
  socket.on('chordOn', function (data) {
      console.log('chordOn ' + data);
	io.sockets.emit('chordOn', data);
  });
  socket.on('chordOff', function (data) {
      console.log('chordOff ' + data);
	io.sockets.emit('chordOff', data);
  });
  socket.on('stopAllNotes', function () {
      console.log('stopAllNotes ' + data);
	io.sockets.emit('stopAllNotes', data);
  });
});
