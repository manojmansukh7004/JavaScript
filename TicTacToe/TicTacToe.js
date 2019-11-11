var util=require("./Utility");
var rl=require('readline-sync');

var count =0;
var move= Math.random();
if(move>0.5){
    move=0
}
else{
    move=1;
}

var ticTacArray=[
    ["*","*","*"],
    ["*","*","*"],
    ["*","*","*"],
];

if(move==1){
    util.playerMove(ticTacArray,move,count);
}else{
    util.autoPlay(ticTacArray,move,count);
}
