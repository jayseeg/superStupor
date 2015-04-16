var moment = require('moment');

module.exports = function( message ) {
	var time = moment().format('h:mm:ss');
	var output = 'fakePost ' + time + ' -- ' + message;
	console.log(output);
};