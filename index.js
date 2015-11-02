
var ApiReader = require('./reader');
var ApiFilter = require('./filter');

var reader = new ApiReader.Reader('http://jsonplaceholder.typicode.com');
reader.load();

var stories = reader.getTop(5);
var filter = new ApiFilter.Filter(process.argv);

stories.forEach(function(val, index, array) {
	if(filter.process(val.title))
	{
		val.toString();
	}
});
