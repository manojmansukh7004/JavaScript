var fs=require('fs');
var list=require('./Utility/LinkedList');
var rl=require('readline-sync');
var util=require('./Utility/Utility');
var Sort=require('../Algorithamic/Programs/Utility/Utility')


var ll=new list.LinkedList();
var str=fs.readFileSync('order.txt').toString().split(" ");
for (var i=0; i<str.length; i++)
{
    str[i] = parseInt(str[i]);
}
console.log(str);

//var arr=Sort.bubbleSort(str);
//console.log(arr);
util.order(str);
