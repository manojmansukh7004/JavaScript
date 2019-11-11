var u=require('./Utility/Utility');
var rl=require('readline-sync');

var n=rl.questionInt("Enter the no of Element in the array :");

var arr=[];
console.log("Enter the array element:");
for(var i=0;i<n;i++)
    arr[i]=rl.questionInt();
    console.log(arr);
    u.insertionSort(arr);
