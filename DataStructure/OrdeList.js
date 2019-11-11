var fs=require('fs');
var list=require('./Utility/LinkedList');
var rl=require('readline-sync');
var util=require('./Utility/Utility');

var ll=new list.LinkedList();
var str=fs.readFileSync('Order.txt').toString().split(" ");
console.log(str);
//str=ll.sorting(str);

util.order(str);


    