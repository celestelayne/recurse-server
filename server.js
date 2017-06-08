var http = require('http');
var url = url = require("url");
var fs = require('fs');
var port = 4000;

var db = {};

http.createServer(function(req, res){
	// console.log(req.method, req.url);
	var uri = url.parse(req.url).pathname;
	console.log(uri);

	fs.writeFile('db.json', JSON.stringify(db), function(err){
		if (err) throw err;
		console.log('File saved');
	});
	// var method = req.method;
	// var url = req.url;

	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('This works');
}).listen(port);