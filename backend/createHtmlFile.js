const fs = require('fs');

module.exports.createFile = (fileName) => {
  const url = `./src/assets/files-created/${fileName}.php`
  fs.writeFile(url, 'This is my text', function (err) {
    if (err) throw err;
    console.log('Results Received');
  });
  setTimeout(() => {
    fs.unlinkSync(url);
  }, 2000);
};
