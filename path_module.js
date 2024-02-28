
const path = require('path');
console.log(path.sep);
const filepath  = path.join('example_for_path','example_for_path2','text.txt');
console.log(filepath);
let name = path.basename(filepath);
console.log(name);

