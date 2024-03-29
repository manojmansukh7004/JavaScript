var fs=require('fs');
var rl=require('readline-sync');
var que=require('../Utility/QueueUsingLinkList');
var list=require('../Utility/LinkedList');
var st=require('../Utility/Stack');
var dque=require('../Utility/Dequeue');
var show = require('util');
var LinkList=new list.LinkedList();
var ll=new list.LinkedList()
module.exports={
    
    //read UnOrder List File 
    readFile(fileName){
        var content=fs.readFileSync(fileName).toString().split(" ");
        return content;
    },

    writeFile(fileName,data){
          var content=fs.writeFileSync(fileName,data,'utf-8');
          return content;
    },
    //LinkList Data Structure
    //UnOrder Link List 
    searchUnOrderList(word){
        if(LinkList.searchElement(word)!=-1){
            //element found than remove element
            console.log("element found .\nelemnt should be deleted:");
            return true;
        }
        else{
            //element not found than add element
           console.log("element not found .\n elemnt should be added:");
           return false;
         }
    },

//LinkList Data Structure
//Order Link List
    order(str){
        for(var i=0;i<str.length;i++){
            ll.addElement(str[i]);
            ll.sort();
        }
        
        console.log("Original list:");
        ll.printList();
        //ll.sort();
        //console.log("sorted list:");
        //ll.printList();

          //take input for search word in list
        var no=rl.question("Enter the no you search:");
        if(ll.searchElement(no)==no){
             //element found than remove element
            console.log("element found . \n elemnt should be deleted:");
            ll.removeElement(no);
            //ll.sort();
             var data=ll.printList();
             fs.writeFileSync("orderOpt.txt",data,'utf-8');
            
        }
        else{
            
            //element not found than add element
            console.log("element not found . \n elemnt should be added:");
            ll.addElement(no);
           ll.sort();
            var data= ll.printList();
            fs.writeFileSync("orderOpt.txt",data,'utf-8');
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
        var queue= new que.QueueUsingLinkList();

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
    // checkPalindrome(str){
    //     var dqueue=new dque.Dequeue();
    //     var count=0;
    //     var Palindrome=false;
    //     for(var i=0;i<str.length;i++){
    //         dqueue.addRear(str[i]);
    //     }
    //     dqueue.qprint();
    //     while(!dqueue.isEmpty() && dqueue.front!==dqueue.rear){
    //         var str1="",str2="";
    //         str1=dqueue.removeRear();
    //         console.log(str1);
    //         str2=dqueue.removeFront();
    //         console.log(str2);
    //         if(str1===str2){
    //             console.log("in if");
                
    //             count++;
    //             Palindrome=true;
    //         }
    //     }
    //     if(Palindrome==true){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // },
    checkPalindromeWord(word) {


        var size = word.length;
        var isPalindrome = true;

        //Dequeue
        let dqu =new dque.Dequeue();
        // var ch = word.split(" ");

        for (let i = 0; i < size; i++) {
            //To add element from rear
            dqu.addRear(word[i]);
        }
        while (!dqu.isEmpty() && dqu.front != dqu.rear) {
            //if removed element from front is not equal to removed element from rear then returns false
            if (dqu.removeFront() == dqu.removeRear()) {
                isPalindrome = true;
            }
            else {
                return false;
            }
        }
        return true;
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
    calender(month,year){

        var months=[
            "",
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        var days=[0,31,28,31,30,31,30,31,30,31,30,31,30];
        try{
            // input year & month from user
            //var year= rl.questionInt("enter the year:");
            //var month=rl.questionInt("enter the month:");
        
            //checking Month & year is valid or not
            if(month < 0 || month > 12) throw "Month value is Invalid , Please Enter a value in range 1-12"
            if(month == undefined || year == undefined) throw "NO input found";
        
            //checked year is leap year or not
            if(month==2 && this.isLeapYear(year)) days[month]=29;
            //show.print()
            console.log("   " + months[month] + " " + year);
            console.log(" S  M Tu  W Th  F  S");
        
            //days printing
            var day=this.day(month,1,year);
        
            for (let i = 0; i < day; i++) {
                show.print("   ")
            }
            for (var i = 1; i <= days[month]; i++) {
                show.print(" ", i);
                if (i < 10){
                    show.print(" ");
                }
                if (((i + day) % 7 == 0) || (i == days[month])) {
                    console.log(" ");
                }
            }
        }
        catch (err) {
            console.log("Error: " + err);
        }
        },
    day(month,days, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        //console.log(y0);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        //console.log(x);
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
       // console.log(m0);
        var d0 = (days + x + Math.floor((31 * m0) / 12)) % 7;
       // console.log(d0);

        return d0;
    },
    factorial(n){
        var fact =1;
        for(i=1;i<=n;i++){
            //fact=fs.readFileSync(fileName).toString().split(" ");
            //return content;
            fact=fact*i;
        }return fact;
    },
    binaryTree(node){
        var number=(Math.floor(this.factorial(2*node))/(this.factorial(node+1)*this.factorial(node)));
        return number;
    },
    }






