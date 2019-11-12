class Node{
    constructor(data){
        this.data=data;
        this.next;
    }
}
class QueueUsingLinkList{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0;
    }
    isempty(){
       /// console.log("mj");
        if(this.front==this.rear==null){
            return true;
        }return false;
    }
    size(){
        return this.size;
    }
    enqueue(data){
    
        var node=new Node(data);
        if(this.rear==null){
            this.front=this.rear=node;
            this.size++;
            return
        }
        this.rear.next=node;
        this.rear=node;
        this.size++;
    }
    dequeue(){
        if(this.front==null){
            console.log("List is Empty");
            return null;
        }
            var temp=this.front;
            this.front=this.front.next;

            if (this.front == null) 
            this.rear = null; 
        return node;
    }
}


module.exports={
    QueueUsingLinkList
}