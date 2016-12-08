var fs = require('fs')

fs.createReadStream('Capture.png').pipe(fs.createWriteStream('Pipe_copy.png'))