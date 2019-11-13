var util=require('./Utility/Utility');

var primenumbers = util.primeNumber(1000);
//console.log(primenumbers.length);

var row=0,range=100;
var k=0;
var value=false;

  //for comparing two prime are anagram or not.
  for (let i = 0; i < primenumbers.length - 1; i++) {
    for (let j = i + 1; j < primenumbers.length; j++) {
        
        //check two primes angram or not
        var value=(util.checkAnagram(primenumbers[i],primenumbers[j]))
       
        if(value==true){
            if (primenumbers[i] <= range) {
                //store the two anagram in array
                if (primenumbers[j] <= range) {
                   array[k].push(primenumbers[i]);
                    array[k].push(primenumbers[j]);
                }
            } 
            else {
                range = range + 100;
                k++;
                array[k] = [];
                if (primenumbers[j] <= range) {
                    array[k].push(primenumbers[i]);
                    array[k].push(primenumbers[j]);
                }
            }
        }

    }
}
//print anagram values
for (i = 0; i < 10; i++)
   console.log(array);