var fs = require('fs')

fs.readFile('Capture.png',function(err, origin_buffer){
	fs.writeFile('Capture_buffer.png',origin_buffer,function(err){
		if(err) console.log(err);
	})
})