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
        //If deque is empty
    if (this.front == null) {
        return false;
    }

    //If deque holds only one value
    if (this.rear == this.front) {
        let data = this.rear.value;
        this.rear = null;
        this.front = null;
        return data;
    }
    else {

        let data = this.front.value;
        let temp = this.rear;

        //traverse through the deque
        while (temp.next != this.front) {
            temp = temp.next;
        }

        //Make front as a temp and next of front null
        this.front = temp;
        this.front.next = null;
        return data;
    }
    }
    removeRear(){
        //if deque is empty
    if (this.rear == null) {
        return false;
    }

    //If deque holds only one element
    if (this.rear == this.front) {
        let data = this.rear.value;
        this.rear = null;
        this.front = null;
        console.log(data);
        return data;
    }
    else {

        //Remove from rear
        let data = this.rear.value;
        this.rear = this.rear.next;
        return data;
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