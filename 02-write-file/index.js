const { stdin,stdout } = process;
const fs = require('fs');
const path = require('path');


stdout.write('Please enter text\n');
const output = fs.createWriteStream(path.join(__dirname, 'output.txt'), 'utf-8');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    stdout.write('Goodbye!');
    process.exit();
  } else {
    output.write(data);
  }
});

process.on('SIGINT', () => {
  stdout.write('Goodbye!');
  process.exit();
});




