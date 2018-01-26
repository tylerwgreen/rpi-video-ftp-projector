// var execFile	= require('child_process').execFile;
// var fs			= require('fs');

var FTPServer = {
	params: {
		
	},
	init: function(params){
		console.log('FTPServer.init', params);
		this.params = Object.assign(this.params, params);
	}
};
module.exports = FTPServer;