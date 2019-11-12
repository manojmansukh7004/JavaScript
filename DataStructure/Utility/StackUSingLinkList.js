class Node{
    constructor(data){
        this.data=data;
        this.next;
    }
}
class StackUsingLinkList{
    constructor(){
        this.top=null;
        this.size=0;
    }
    isEmpty(){
        if(this.top==null){
            return true;
        }return false;
    }
    push(data){
        var node=new Node(data);
        if(node==null){
            console.log("Ovrflow");
            return;
        }
        else{
            //var current=this.top;
            node.next=this.top;
            this.top=node;
            this.size++;
        }
    }
    pop(){
        if(this.top==null){
            console.log("stack is empty.");
            return true;
        }
        else{
            //var current=this.top;
            this.top=this.top.next;
            this.size--;

        }
    }
    display(){
       // console.log("mj");
        var str="";
        var current=this.top;
        while(current!=null){
            str+="->"+current.data;
            current=current.next;
        }
        console.log(str);
    }
    peek(){
        return this.top;
    }
    reverse(){
        var str=new Array();
        var current=this.top;
        while(current!=null){
            str+=current.data+" ";
            current=current.next;
        }
        str=str.split(" ");
        console.log(str[0]);
        var arr="";
        for(var i=str.length;i>=0;i--){
            arr+="->"+str[i];
        }
        console.log(arr);

        
    }
}


module.exports={
    StackUsingLinkList
}