var rl=require("readline-sync");
var u=require("./Utility/Utility");

var year=rl.questionInt("Enter the year:");
u.isLeapYear(year);