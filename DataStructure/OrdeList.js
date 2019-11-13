var fs=require('fs');
var list=require('./Utility/LinkedList');
var rl=require('readline-sync');
var util=require('./Utility/Utility');

var ll=new list.LinkedList();
var str=fs.readFileSync('order.txt').toString().split(" ");
console.log(str);
var arr=util.order(str);
console.log(arr);

    