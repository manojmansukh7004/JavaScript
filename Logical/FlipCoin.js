var rl=require('readline-sync');
var u=require('./Utility/Utility');

var toss=rl.questionInt("Enter the no of Time coin-Toss");
u.flipCoin(toss);
