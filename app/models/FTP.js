var execFile	= require('child_process').execFile;
var fs			= require('fs');

var FTP = {
	params: {
		
	},
	init: function(params){
		console.log('FTP.init', params);
		this.params = Object.assign(this.params, params);
	}
};
module.exports = FTP;