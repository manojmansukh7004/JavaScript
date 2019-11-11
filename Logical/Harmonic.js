var rl=require('readline-sync');
var u=require('./Utility/Utility');

var n=rl.questionInt("Enter the number:");
var result=u.harmonic(n);
console.log(result);
