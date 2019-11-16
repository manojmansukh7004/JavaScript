var fs=require('fs');

var content=fs.readFileSync('./xyz.txt').toString();
console.log(content);
fs.writeFileSync('./abc.txt',content,'utf-8');