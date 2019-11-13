var util=require('./Utility/Utility');
var staklink=require('./Utility/StackUSingLinkList');
var que=require('./Utility/QueueUsingLinkList');
var queue= new que.QueueUsingLinkList();
var list=require('./Utility/LinkedList');
var ll=new list.LinkedList();

ll.addElement(10);
ll.addElement(50);
ll.addElement(670);
ll.addElement(4);
ll.addElement(0);
ll.printList();
ll.sort();
ll.printList();