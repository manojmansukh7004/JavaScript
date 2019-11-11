var rl=require('readline-sync');
var u=require('./Utility/Utility');

var n=rl.questionInt("Enter the no of elements in arrar");

var arr=[];
console.log("enter the array elements:");
for(var i=0;i<n;i++){
    arr[i]=rl.questionInt();
}
console.log(arr);
u.selectionSort(arr);