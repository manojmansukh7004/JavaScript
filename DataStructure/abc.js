var qu=require('../DataStructure/Utility/QueueUsingLinkList')
var queue=new qu.QueueUsingLinkList();

queue.enqueue(12)
queue.enqueue(43)
queue.enqueue(1)
var arr=queue.display();
queue.sort(arr)
queue.display()