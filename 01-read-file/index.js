
const path = require('path');
const fs = require('fs');
const { stdout } = process;

const streamText = fs.createReadStream(path.join(__dirname , 'text.txt'), 'utf-8');
streamText.on('data', data => stdout.write(data));


