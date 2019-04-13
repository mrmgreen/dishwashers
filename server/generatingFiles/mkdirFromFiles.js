const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, '../product'), (error, files) => {
  const regex1 = /json$/
  const jsonFiles = files.filter((file) => regex1.test(file));
  jsonFiles.forEach((file) => {
    const dirName = file.replace('.json', '');
    const dirPath = path.resolve(`../product/${dirName}`);
    const currentFilePath = path.resolve(__dirname, `../product/${file}`);
    fs.mkdir(dirPath, (error) => {
      if (error) console.log('error ==', error.message);
      fs.rename(currentFilePath, `${dirPath}/${file}`, (e) => {
        if (e) console.log('error ===', e.message);
      });
    });
  });
});
