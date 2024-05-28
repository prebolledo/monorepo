const fs = require('fs');
const ma = JSON.parse(fs.readFileSync('module-alias.json').toString());
const p = JSON.parse(fs.readFileSync('package.json').toString());
const n = {
  ...p,
  ...ma,
};

fs.writeFileSync('package.json', JSON.stringify(n));