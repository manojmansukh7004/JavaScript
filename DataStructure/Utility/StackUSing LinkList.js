class Node{
    constructor(){
        this.data=data;
        this.next=null;
    }
}
class StackLink{
    constructor(){
        this.top=null;
    }
    isEmpty(){
        if(top==null){
            return true;
        }return false;
    }
    push(x){
        if(this.isEmpty()){
            var node=new Node();
            node.data=x;
            node.next=top;
        }
        else{
            var node=new node();
            var current=this.top;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
    }
}