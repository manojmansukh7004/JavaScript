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
        if(this.rear==null){
            return true;
        }return false;
    }
    size(){
        return this.size;
    }
    enqueue(data){
        
        var node=new Node(data);
        if(this.rear==null){
            this.front=node;
            this.rear=node;
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
        return temp.data;
    }
    display(){
    
        var arr="";
        while (this.rear!=null){
            arr+=this.dequeue()+" ";
        }
        console.log(arr);
        return arr;
    }
    sort(){
        console.log("mj");
        var arr="";
        var current=this.front;
        while(current!=this.rear){
            if(current.data>current.next.data){
                var temp=current.data;
                current=current.next.data;
                current.next=temp;
                arr+=current.data;
            }
            current=current.next;
        }
        console.log(arr);
    }
}


module.exports={
    QueueUsingLinkList
}