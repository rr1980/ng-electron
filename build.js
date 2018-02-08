const
  fs = require('fs');

//Copy files to dist folder created by @angular/cli
fs.createReadStream('package.json').pipe(fs.createWriteStream('dist/package.json'));
fs.createReadStream('main.prod.js').pipe(fs.createWriteStream('dist/main.prod.js'));

//Edit package.json content for production environment
fs.readFile('dist/package.json', 'utf8', (err, data) => {
  if(err) {
    return console.log(err);
  }
  const productionData = JSON.parse(data);
  productionData.main = 'main.prod.js';
  productionData.dependencies = [];
  productionData.devDependencies = [];

  fs.writeFile('dist/package.json',  JSON.stringify(productionData), 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
