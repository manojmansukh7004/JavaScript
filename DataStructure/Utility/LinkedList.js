
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
                return pos;
            }
            pos++;
            current=current.next;
        }return -1;
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
}
sort() {
    var temp;
    temp = this.head;
    var p = this.size;
    while (p > 0) {
        temp = this.head;
        while (temp.next !== null) {
            if ((temp.data) > (temp.next.data)) {
                var t = temp.data;
                temp.data = temp.next.data;
                temp.next.data = t;
            }
            temp = temp.next;
        }
        p--;
    }
}

}
  
module.exports={
    LinkedList
}
