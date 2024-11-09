const fs = require('fs');
const promisify = require('util').promisify;
const fsPromise = fs.promises;
const readFilePromise = promisify(fs.readFile);

// fs.readFile('./db.json', (err, data) => {
//   if (err) {
//     console.error('读取异常:', err);
//     return;
//   }
//   console.log(data.toString());
// });

fs.readFile('./db.json', (err, data) => {
  if (err) {
    console.error('读取异常:', err);
    return;
  }
  console.log(data.toString());
});

readFilePromise('./db.json').then(data => {
  console.log(data.toString());
});

const dataRes = fs.readFileSync('./db.json');
console.log(dataRes.toString());
