var express = require('express'),
	app = express(),
	port = Number(process.env.PORT || 1337);

var callback = function() {
	console.log('Server listening on Port '+ port +'...');
};

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/public', express.static('public'));

app.listen(port, undefined, undefined, callback);