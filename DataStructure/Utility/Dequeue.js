class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Dequeue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.qsize=0;
    }
    
    isEmpty(){
        if(this.front==this.rear==null){
            return true;
        }return false;
    }
    addFront(data){
        var node=new Node(data);
       // console.log(data);
        if(this.front==null){
            this.front=node;
            this.rear=node;
            this.size++;
            console.log("size"+this.size);
           // console.log("if:"+data);
        }else{
            this.front.next=node;
            this.front=node;
            this.size++;

            //console.log("else:"+data);
        }
    }
    addRear(data){
        var node= new Node(data);
        if(this.front==null){
           this.front=node;
            this.rear=node;
            this.size++;

        }
        else{
            node.next=this.rear;
            //this.rear.next=node;
            this.rear=node;
            this.size++;

        }
    }
    removeFront(){
        if(this.front==null){
            return false;
        }
        if(this.rear==this.front){
            this.rear=null;
            this.front=null;
            this.size--;

        }
        else{
           var temp=this.rear;
           while(temp.next!=this.front){
               temp=temp.next;
           }
           this.front=temp;
           this.front.next=null

        }
    }
    removeRear(){
        if(this.front==this.rear){
            this.front=null;
            this.rear=null;
        }
        else{
            this.rear=this.rear.next;
        }
    }
    qsize(){
        return this.size;
    }
    qprint(){
        var temp=this.rear;
        var str="";
        while(temp!=null){
            str+=temp.data+"-> ";
            //console.log(temp.data);
            temp=temp.next;
        }
        console.log(str);
    }
}

module.exports={
    Dequeue
}