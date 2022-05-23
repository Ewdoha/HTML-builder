const fs = require('fs');
const { stdout } = process;
const path = require('path');


fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, function (err, files) {
  files.forEach(function (file) {
    if (file.isFile()) {
      fs.stat(path.resolve(__dirname, 'secret-folder', file.name), function (err, stats) {
        let fileName = file.name.split('.').slice(0, -1).join('.');
        let fileExt = path.extname(file.name).slice(1);
        let fileSize = stats.size.toString() + 'Kb';
        stdout.write(`${fileName} - ${fileExt} - ${fileSize} \n`);
      });
    }
  });
});
