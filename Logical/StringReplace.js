var rl= require('readline-sync');
var u=require('./Utility/Utility');

var value;
var name=rl.question("Enter the user name:");
u.stringReplace(name);