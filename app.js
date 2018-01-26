/**
 * Include dependencies
 */
console.log('Include dependencies');
var path	= require('path');

/**
 * Define App variables
 */
console.log('Define App variables');
var paths	= {
	app:	path.join(__dirname, 'app'),
	models:	path.join(__dirname, 'app/models'),
	bin:	path.join(__dirname, 'bin'),
	video:	{
		new:	path.join(__dirname, 'assets/video/new'),
		old:	path.join(__dirname, 'assets/video/old'),
	}
};

/**
 * Load and initialize models
 */
console.log('Load models');
var FTPServer	= require(path.join(paths.models, 'FTPServer'));
var Projector	= require(path.join(paths.models, 'Projector'));

console.log('Initialize models');
FTPServer.init({
});
Projector.init({
	binDir: paths.bin,
	videosDirs: paths.video,
	initWait:	5000,
	newWait:	10000,
	// initWait:	1000,
	// newWait:	1000,
});