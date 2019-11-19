var u = require('./Utility/Utility');
var list = require('./Utility/Dequeue');
var rl = require('readline-sync');

var word = rl.question("Enter the word to check palindrome:");
 var isPalindrome = u.checkPalindromeWord(word);
 console.log(isPalindrome);
 
		if(isPalindrome == true)
			console.log(word+" is Palindrome");
		else
			console.log(word+" is not Palindrome");