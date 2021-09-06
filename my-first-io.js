const fs = require('fs');
const process = require('process');

fs.readFile(process.argv[2], 'utf8', (err, string)=>{
   if (err) return console.error(err);
   const result=string.split('\n').length-1;
   console.log(result)
});

// const process = require('process');
// const fs = require('fs');
// const n = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
// if (err) return console.error(err);
// const n=string.split('\n').length-1;

// console.log(n);