
var exports = module.exports = {};

var http = require('http');
var entry = require('./entry');

exports.Reader = function(baseUrl) {
	var root = 'http://jsonplaceholder.typicode.com';
	var retData = [];

	this.load = function() {
		var options = {
		  host: root,
		  path: '/posts',
		  method: 'GET'
		};

		var callback = function(request) {
			var str = '';

			request.on('data', function(chunk){ 
				str += chunk;
			});

			request.on('end', function() {
				retData = JSON.parse(str).map(entry.create);
			});
		};

		http.request(options, callback).end();
	};

	this.getTop = function(num) {
		var ret = [];
		for(var i=0; i<5; ++i) {
			ret[i] = retData[i];
		}
		return ret;
	};
};
