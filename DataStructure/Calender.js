var util=require('./Utility/Utility');
var rl=require('readline-sync');
var show = require('util');

var year= rl.questionInt("enter the year:");
var month=rl.questionInt("enter the month:");
util.calender(month,year);

