//var rl = require('readline-sync');
var rl = require('readline-sync');
var u  = require('./Utility/Utility');

var str1,str2;
str1=rl.question("enter the first String:");
console.log(str1);
str2=rl.question("Enter the sec String:");
console.log(str2);

//u.isAnagram(str1,str2);
u.isAnagram(str1,str2);

