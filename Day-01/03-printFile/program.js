var fs = require('fs');
/*fs.readFile('test.txt', {encoding : 'utf8'}, function(err, contents){
	if (err){
		console.log('something went wrong', err);
		process.exit(1);
	}
	console.log(contents);
});
*/

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});
/* open, data, close, end, error */

var readCount = 0;

stream.pipe(process.stdout);

stream.on('data', function(contents){
	++readCount;
});

stream.on('end', function(){
	console.log('============= done with [' + readCount + ' ] readCounts ==============');
});