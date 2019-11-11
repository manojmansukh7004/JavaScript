var que=require('./Utility/Queue');
var rl=require('readline-sync');
var util=require("./Utility/Utility");
var queue= new que.Queue();

console.log("......Welcom To The JS Bank......");
var balance=15000;
console.log("Current Balanc:"+balance);
util.cashCounter(balance);


