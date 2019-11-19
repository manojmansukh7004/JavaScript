var rl = require('readline-sync');
var w=require('util')

/*ar methods = { }
methods.bubbleSort= function(){
    for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);

    }

module.exports = methods
*/
module.exports={
    bubbleSort(arr){
        for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
        },

        selectionSort(arr){

            var temp,min;
            for(var i=0;i<arr.length-1;i++){
                min=i;
                for(var j=i+1;j<arr.length;j++){
                    if(arr[min]>arr[j])
                    min=j;
                }
                    temp=arr[min];
                    arr[min]=arr[i];
                    arr[i]=temp;
                }
                console.log(arr);

            },

        insertionSort(arr){
            for(var j=0;j<arr.length;j++){
                var key=arr[j];
                var i=j-1;
                while(i>=0 && arr[i]>key){
                    arr[i+1]=arr[i];
                    i=i-1;
                }
                arr[i+1]=key;
            }
            console.log(arr);
        },

        isAnagram(str1,str2){
            var count=0;
            var l1= str1.length;
            var l2 =str2.length;
            
            ch1=str1.split("");
            ch2=str2.split("");
            
            if(l1==l2){
                for(var i=0;i<ch1.length;i++){
                    for(var j=0;j<ch2.length;j++){
                        if(ch1[i]==ch2[j]){
                                count++;
                        }
                    }
                }
                if(count==l1)
                console.log("string is anagram.")
                else
                    console.log("string not anagram.")
            }

        
        },
        

        }
    


