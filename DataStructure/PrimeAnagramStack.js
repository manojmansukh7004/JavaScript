var util=require('./Utility/Utility');
var stklink=require('./Utility/StackUSingLinkList');

var primeNumbers=util.primeNumber(1000);
console.log(primeNumbers);
var arr=[];
var range=100;
var k=0;
var stk=new stklink.StackUsingLinkList();
for(var i=0;i<primeNumbers.length-1;i++){
    for(var j=i+1;j<primeNumbers.length;j++){
        //check two primes angram or not
        var value=(util.checkAnagram(primeNumbers[i],primeNumbers[j]))

        //console.log(primeNumbers);
        if(value==true){
            if(primeNumbers[i]<=range){
                if(primeNumbers[j]<=range){
                    stk.push(primeNumbers[i]);
                    stk.push(primeNumbers[j]); 
                }
            }
            else{
                range=range+100;
                if(primeNumbers[j]<range){
                    stk.push(primeNumbers[i]);
                    stk.push(primeNumbers[j]);
                }
            }
        }
    }
}
stk.display();
stk.reverse();
console.log(arr);
