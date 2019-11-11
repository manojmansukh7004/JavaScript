var u=require('./Utility/utility');
var rl=require('readline');
var arr=new Array(3);
for(var i=0;i<3;i++){
    arr[i]=[];
}
console.log(arr);

for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        console.log("|");
    }
}