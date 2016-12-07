var fs = require('fs')

var readStream = fs.createReadStream('Capture.png')
var writeStream = fs.createWriteStream('StreamTCopy.png')


readStream.on('data',function(chunk){
	if(writeStream.write(chunk) === false){
		console.log('still cached')	
		readStream.pause()
	}
	
})

readStream.on('end',function(){
	writeStream.end()
})

writeStream.on('drain', function(){
	console.log('data drains')

	readStream.resume();
})