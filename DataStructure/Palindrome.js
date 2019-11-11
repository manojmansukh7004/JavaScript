var u = require('./Utility/Utility');
var list = require('./Queue');
var rl = require('readline-sync');

var word = rl.question("Enter the word to check palindrome:");
 var isPalindrome = u.checkPalindromeWord(word);
		if(isPalindrome == true)
			console.log(word +"  is Palindrome String");
		else
			console.log(word +"  is not Palindrome String");