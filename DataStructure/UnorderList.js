var fs=require('fs');
var rl=require('readline-sync');
var util=require('./Utility/Utility');
var list=require('./Utility/LinkedList')

var linkList=new list.LinkedList();
var content=util.readFile('UnorderList.txt');
console.log(content);

//Adding the content into Link List
for(var i=0;i<content.length;i++)
linkList.addElement(content[i])
linkList.printList();

//take input from user for search the word
var word=rl.question("Enter the word you search in list:");

//search Element in list. if element is found 
//then remove it else add into list.
var value=linkList.searchElement(word);
console.log(value);

if(value==true){
    console.log("element is found, it should be deleted");
    var data=linkList.removeElement(word);
    linkList.printList();
}
else{
    console.log("element not found, it should be added");
    linkList.addElement(word);
    var data=linkList.printList();
}
//write a data into file
//console.log(data);
util.writeFile('./UnOrderOpt.txt',data,'utf-8') ;

   

