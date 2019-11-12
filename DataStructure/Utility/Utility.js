var fs=require('fs');
var rl=require('readline-sync');
var que=require('../Utility/Queue');
var list=require('../Utility/LinkedList');
var st=require('../Utility/Stack');
var dque=require('../Utility/Dequeue');
//var algo=require('/home/admin1/Documents/ReactNative/Algorithamic')
module.exports={

    //LinkList Data Structure
    //UnOrder Link List 
    unOrder(str){
        var ll=new list.LinkedList();
       // Console.log(str);
        for(var i=0;i<str.length;i++)
        ll.addElement(str[i])
        ll.printList();

        //take input for search word in list
        var word=rl.question("Enter the word you search:");
        if(ll.searchElement(word)!=-1){
            //element found than remove element
            console.log("element found . \n elemnt should be deleted:");
            ll.removeElement(word);
             ll.printList();
        }
        else{
            //element not found than add element
            console.log("element not found . \n elemnt should be added:");
            var str1= ll.addElement(word);
            ll.printList();

         }
    },

//LinkList Data Structure
//Order Link List
    order(str){
       
        var ll=new list.LinkedList();
    
        for(var i=0;i<str.length;i++)
        ll.addElement(str[i]);
        ll.sort();
        ll.printList();

          //take input for search word in list
        var no=rl.question("Enter the no you search:");
        if(ll.searchElement(no)!=-1){
             //element found than remove element
            console.log("element found . \n elemnt should be deleted:");
            ll.removeElement(no);
             ll.printList();
        }
        else{
            //element not found than add element
            console.log("element not found . \n elemnt should be added:");
            var str1= ll.addElement(no);
            ll.sort(str1);
             ll.printList();
         }
    },

    //Stack Data Structure
    //Simple Balanced Parentheses
    checkParanthesis(exp){
        
        var stk=new st.Stack();
        for(var i=0;i<exp.length;i++){
            var ch=exp.charAt(i);
            //console.log(ch);
            if(ch=="{" || ch=="[" || ch=="("){
                stk.push(ch);
               // console.log(ch);
            }
             else {
               var choice=ch;
               var topElement=stk.peek();
               console.log(choice);
               switch(choice){
                   case ")":
                   //console.log("mj");
                    if(topElement =="(" );
                    stk.pop();
                    break;

                    case "}":
                    if(topElement==="{");
                    stk.pop();
                    break;

                    case "[":
                    if(topElement=="[");
                    stk.pop();
                    break;
               }
            }
        }
        //Check Expression is balance or not
        if(stk.size==0){
            console.log("Expression is Balanced..");
        }
        else{
            console.log("Expression is not Balanced..")
        }
    },

    //Queue Data Structure
    //Simulate Banking Cash Counter
    cashCounter(balance){
        var totalAmt=balance;
        console.log(totalAmt);
        var queue= new que.Queue();

        //take input no of user in queue
        var pepole=rl.questionInt("enter the no pepole in queue:");
        for(var i=0;i<pepole.length;i++){
            queue.inqueue(i);
        }

        //travers loop for no. of pepole in queue
        while(pepole > 0){
            var ch=0,amount=0;
            ch=rl.questionInt("\n1.Press 1 for Deposit Amount.\n2.Prss 2 for Withdraw Amount.\n");
            switch(ch){
                case 1:
                    //deposit amount
                    amount=rl.questionInt("Enter the Amount : ");
                   totalAmt= this.depositAmt(totalAmt,amount);
                   break;
                case 2:
                    //withdraw amount
                    amount=rl.questionInt("Enter the Amount :");
                   totalAmt= this.withdrawAmt(totalAmt,amount);
                   break;
            }
                pepole--;
        }
       
    },
    //deposit Amount
    depositAmt(totalAmt,amount){
        totalAmt+=amount;
        console.log("Updated Balnce:"+totalAmt);
        return totalAmt;
    },
    //withdraw Amount
    withdrawAmt(totalAmt,amount){
        if(totalAmt>amount){
            totalAmt-=amount;
            console.log("Updated Balnce:"+totalAmt);
            return totalAmt;
        }return console.log("Insufficent Balancle..\nCurrent Balance:"+totalAmt);
        
    },
    //Dequeue Data Structure
    //Palindrome-Checker
    checkPalindrome(str){
        var dqueue=new dque.Dequeue();
        var count=0;
        var Palindrome=false;
        for(var i=0;i<str.length;i++){
            dqueue.addRear(str[i]);
        }
        dqueue.qprint();
        while(!dqueue.isEmpty() && dqueue.front!==dqueue.rear){
            var str="",str2="";
            str1=dqueue.removeRear();
            str2=dqueue.removeFront();
            if(str1===str2){
                count++;
            }
        }
    },
    primeNumber(range){
        var count;
        var pos=0;
        var arr=new Array();
        for(var i=2;i<=range;i++){
            count=0;
            for(var j=2;j<i;j++){
                if((i%j)==0){
                    count++;
                    break;
                }
            }
            if(count==0){
                arr[pos]=i++;
                pos++;          
            }  
        }   
             return arr;
    },
    checkAnagram(str1,str2) {
        //var str1=13,13,11;
        //var str2=23,11,19;
        var check=false;
        var count=0;
        var string1=str1.toString().split("");
        string1.sort();
        var string2=str2.toString().split("");
        string2.sort();
        
        var l1=string1.length;
        //console.log(l1);
        if(string1.length!=string2.length){
            return false;
        }

        else{
            for(var i=0;i<l1;i++){
                if (string1[i] == string2[i]) {
                    count++;
                }
            }
            if (count==string1.length) {
                return true;
              //console.log("string are anagram");
            }
            else {
              return false;
                //console.log("string are not anagram");
            }
        }
     },
    sort(no){
        var arr=no;
        for(var i=0;i<arr.length-1;i++){
            for(var j=i+1;i<arr.length;j++){
                if(no[i]<no[j]){
                    var temp=no[i];
                    no[i]=no[j];
                    no[j]=temp;
                }
            }
        }
        return(arr);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ;
    },
    isLeapYear(year) {
        /*
        * ensure year is of four digit
        */
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else{
            return false;
        }
    },
    day(month,days, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (days + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },
}




