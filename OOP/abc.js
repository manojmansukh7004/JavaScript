var rl=require('readline-sync');

var today=new Date()
var start=today.getSeconds();
console.log(start);
var a=rl.questionInt("press 1 for stop");

var stop=today.getSeconds();
console.log(stop);

var ela=stop-start;
console.log(ela);
