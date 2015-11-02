
var exports = module.exports = {};

function ApiResult(item) {
	var rawData = item;

	this.title = item.title;

	this.toString = function() {
		console.log(JSON.stringify(rawData));
	}
}

exports.create = function(item) {
	return new ApiResult(item);
};