var Readable = require('stream').Readable
var Writable = require('stream').Writable

var readStream = new Readable();
var writStream = new Writable();

writStream.on('error',function(error){
	console.log('writStream error')
})

readStream.on('error',function(error){
	console.log('readable error:'+error)
})

readStream.push('hi')
readStream.push('Marvin')
readStream.push(null)

writStream._write = function(chunk,encode,cb){
	console.log(chunk.toString())
	cb()
}

readStream.pipe(writStream)