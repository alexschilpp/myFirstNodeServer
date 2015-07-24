var express = require('express'),
	exphbs 	= require('express3-handlebars'),
	app 	= express(),
	port 	= Number(process.env.PORT || 1337);

var callback = function() {
	console.log('Server listening on Port '+ port +'...');
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});


app.use('/public', express.static('public'));

app.listen(port, undefined, undefined, callback);