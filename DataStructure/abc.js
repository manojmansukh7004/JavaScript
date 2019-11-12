var util=require('./Utility/Utility');
var staklink=require('./Utility/StackUSingLinkList');

var stk=new staklink.StackUsingLinkList();
var m=stk.isEmpty();
console.log(m);
stk.push(10);
stk.push(20);
stk.push(30);
//stk.push(40);
//stk.display();
//stk.pop();
//stk.display();
var top=stk.peek();
console.log(top);

//var n=stk.isEmpty();
//console.log(top);