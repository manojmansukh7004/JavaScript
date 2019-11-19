
class Node
{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    addElement(data){
        var node=new Node(data);
        var current=this.head;
        if(this.head==null){
            this.head=node;
            this.size++;
            //console.log(data);
        }
        else{
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }this.size++;
    }   

    speciPosition(data,pos){
        var node=new Node(data);
        var curr,prev;
        curr=this.head;
        if(pos==0){
            node.next=this.head;
            this.head=node;
            this.size++;
        }
        else{
            var current=this.head;
            var it=0;
            while(it<pos){
                it++;
                prev=current;
                current=current.next;
            }
            prev.next=node;
            node.next=current;
        }this.size++;
    }
    removeElementIndex(pos){
        var current,prev;
        current=this.head;
        if(pos==0){
            this.head=current.next;
            this.size--;
        }
        else{
            var current=this.head;
            var it=0;
            while(it<pos){
                it++;
                prev=current;
                current=current.next;
            }
            prev.next=current.next;
        }this.size--;
    }

    removeElement(element){
        var prev=null;
        var current=this.head;
        while(current!=null){
            if(current.data==element){
                if(prev==null)
                    this.head=current.next;
                else
                    prev.next=current.next;
            }prev=current;
            current=current.next;
        }   
    }
    searchElement(element){
        var current=this.head;
        var pos=0;

        while(current!=null){
            if(current.data==element){
                //console.log("found");
                return true;
            }
            pos++;
            current=current.next;
        }return false;
    }

isempty(){
    if(this.head==0){
        console.log("list is empty...")
    }
}
 printList() {     
    var current=this.head;
    var str="";
    while(current!=null){
        str+=" -> "+current.data;
        current=current.next;
    }
    console.log(str);
    return str;
}
sort() {
    var current=this.head;
     var index;
     if(this.head==null){
         return;
     }
    else{
        while(current!=null){
             index=current.next;
            while(index!=null){
                if(current.data>index.data){
                    //console.log(current.data);
                    //console.log(index.data);
                    var temp=current.data;
                    current.data=index.data;
                 index.data=temp;
                }
                index=index.next;
            }
        current=current.next;
        }    
    }
}
}
module.exports={
    LinkedList
}
