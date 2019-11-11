var rl = require('readline-sync');
var u=require('./Utility/Utility');

var n=rl.questionInt("Enter number of elements in the array:");
console.log(n);
var arr=[];
var temp;

console.log("enter ",+n,"array element:");
for(let i=0;i<n;i++){
    arr[i]=rl.questionInt();
}
console.log(arr);
u.bubbleSort(arr);
