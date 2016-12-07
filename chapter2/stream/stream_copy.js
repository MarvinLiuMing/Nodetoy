var fs = require('fs')
var source = fs.readFileSync('Capture.png')

fs.writeFileSync('StreamCopy.png',source);