const fs = require('fs');
const path = require('path');

fs.readdir((path.resolve(__dirname, '../product')), (error, directories) => {
  const regex1 = /^\./
  const directoriesFiltered = directories.filter((dirs) => !regex1.test(dirs));
  if (error) console.log('error ===', error);
  
  directoriesFiltered.forEach((dir) => {
    const fileName = dir.concat('.json');
    const filePath = `../product/${dir}/${fileName}`;
    const jsonFile = JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath)));
    const imagesUrls = jsonFile.media.images.urls;
    const images = imagesUrls.toString().replace(/,/g, '\n').replace(/\/\//g, 'http://').replace(/\?/g, '?.jpeg');

    try {
      fs.writeFileSync(path.resolve(__dirname, filePath.replace('json', 'txt')), images);
      console.log('Success urls - images have been written to file');
    } catch (e) {
      console.log('error', e.message);
    }
  });
});

