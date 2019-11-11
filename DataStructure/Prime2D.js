var util=require('./Utility/Utility');

var isprimeNo=util.primeNumber(1000);
console.log(isprimeNo);
var primeArray=[[]];
var i=0,j=0,range=100;

for(var k=0;k<isprimeNo.length;k++){
     // insert if primenumber is less than range
    if(isprimeNo[k]<range){
        primeArray[i][j]=isprimeNo[k];
        j++;
    }
    // increment range and insert if primenumber is greater than range
    else{
        i=i+1;
        j=0;
        range=range+100;
        primeArray[i]=[];
        primeArray[i][j]=isprimeNo[k];
    }
}
for(var i=0;i<10;i++){
    console.log(primeArray[i]);
}


