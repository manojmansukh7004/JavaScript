var que=require('./Utility/QueueUsingLinkList');
var util=require('./Utility/Utility');
// console.log("mj") 

var queue=new que.QueueUsingLinkList();
var primeNumber=util.primeNumber(1000);
//console.log(primeNumber);
var range=100;

//takeing first primeNumber
for(var i=0;i<primeNumber.length;i++){
    for(var j=i+1;j<primeNumber.length;j++){
        //cheked two primeNumbers are anagram or not
        var value=(util.checkAnagram(primeNumber[i],primeNumber[j]));
       
        if(value === true){
            //store in value in queue
            if(primeNumber[i]<=range){
                if(primeNumber[j]<=range){
                    queue.enqueue(primeNumber[i]);
                    queue.enqueue(primeNumber[j]);
                }
            }
            else{
            //increasing range    
            range=range+100;
                if(primeNumber[j]<range){
                    queue.enqueue(primeNumber[i]);
                    queue.enqueue(primeNumber[j]);
                }
            }   
        }    
    }
}
//display queue element 
queue.display();