var socket = io.connect('http://node-soup.herokuapp.com:80');

socket.on('badge', function(data) {
  console.log('New Badge!');
});

