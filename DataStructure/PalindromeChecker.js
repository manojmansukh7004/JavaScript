var rl=require('readline-sync');
var deq=require('./Utility/Dequeue')
var util=require('./Utility/Utility');
var dqueue=new deq.Dequeue();

var str=rl.question("Enter the String:");
palindrome=util.checkPalindrome(str);
console.log(palindrome);
if(palindrome===true)
    console.log(str +" is palindrome String.");
else
    console.log(str +" is not palindrome String.");
