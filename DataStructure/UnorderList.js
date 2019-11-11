var fs=require('fs');
var rl=require('readline-sync');
var util=require('./Utility/Utility');
var list=require('./Utility/LinkedList');

var ll=new list.LinkedList();
var str=fs.readFileSync('UnorderList.txt').toString().split(" ");
var l=str.length;
console.log(str);

//function call
util.unOrder(str);


    