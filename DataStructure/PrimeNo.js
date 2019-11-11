var arr=new Array();
var count =0;
for(var i=0;i<3;i++){
    arr[i]=new Array(3);
    for(j=0;j<3;j++){
        arr[i][j]=count;
        count++;
    }
}
console.log(arr);
