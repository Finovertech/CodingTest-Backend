
var exports = module.exports = {};

exports.Filter = function(args) {
	var searchTerm = args[0];
	var invert = args[1] == 'true';

	this.process = function(searchIn) {
		var matches = (searchIn.indexOf(searchTerm) >= 0 && !invert) || (searchIn.indexOf(searchTerm) == -1 && invert);

		if(matches)
			throw new Error("Doesn't match");

		return true;
	};
}