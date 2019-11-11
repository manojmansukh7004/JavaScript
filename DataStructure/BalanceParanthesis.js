var rl=require('readline-sync');
var st=require('./Utility/Stack');
var util=require('./Utility/Utility')

var exp=rl.question("enter the Expression:");
util.checkParanthesis(exp);

