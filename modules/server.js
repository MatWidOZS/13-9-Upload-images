var http = require('http');
var colors = require('colors');

var handlers = require('./handlers'); //my module

function start() {
	function onRequest(request, response) {
		console.log('Odebrano zapytanie.'.green);
		console.log('Zapytanie ' + request.url + ' odebrane.');

		response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

		switch (request.url) { //switch for distinguish between queries
			case '/':
			case '/start':
				handlers.welcome(request, response);
				break;
			case '/upload':
				handlers.upload(request, response);
				break;
			default:
				handlers.error(request, response);
		}
	}

	http.createServer(onRequest).listen(9000);

	console.log('Uruchomiono serwer!'.green)
}

exports.start = start;