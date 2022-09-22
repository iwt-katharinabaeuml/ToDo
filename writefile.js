const fs = require('fs'); // warum und wofür?

const content = 'Some content!';

fs.writeFile('Anderes.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
  fs.writeFile
});
var Anderertest = fs.readFile('Anderes.txt')
console.log(Anderertest)