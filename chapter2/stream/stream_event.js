var fs = require('fs')

var readStream = fs.createReadStream ('stream_Copy.js')
var count = 0;

readStream.on('data',function(chunk){
	count++;
	console.log('data Emits')
	console.log(Buffer.isBuffer(chunk))
	//console.log(chunk.toString('utf8'))

	readStream.pause();
	console.log('data pause')
	setTimeout(function(){
		console.log('data pause end')
		readStream.resume();
	},3000)
})
.on('readable', function(){
	console.log('data readable')
})
.on('end', function(){
	console.log('time : ' + count)
	console.log('data end')
})
.on('close',function(){
	console.log('data close')	
})
.on('error',function(){
	console.log('data error')
})