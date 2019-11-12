var util=require('./Utility/Utility');
var rl=require('readline-sync');
var show = require('util');
var months=[
    "",
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
var days=[0,31,28,31,30,31,30,31,30,31,30,31,30];
try{
    // input year & month from user
    var year= rl.questionInt("enter the year:");
    var month=rl.questionInt("enter the month:");

    //checking Month & year is valid or not
    if(month < 0 || month > 12) throw "Month value is Invalid , Please Enter a value in range 1-12"
    if(month == undefined || year == undefined) throw "NO input found";

    //checked year is leap year or not
    if(month==2 && util.isLeapYear(year)) days[month]=29;
    //show.print()
    console.log("   " + months[month] + " " + year);
    console.log(" S  M Tu  W Th  F  S");

    //days printing
    var day=util.day(month,1,year);

    for (let i = 0; i < day; i++) {
        show.print("   ")
    }
    for (var i = 1; i <= days[month]; i++) {
        show.print(" ", i);
        if (i < 10){
            show.print(" ");
        }
        if (((i + day) % 7 == 0) || (i == days[month])) {
            console.log(" ");
        }
    }
}
catch (err) {
    console.log("Error: " + err);
}