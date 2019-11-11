class Node{
    constructor(top,max){
        this.top=top;
        this.max=max;

    }
}
var arr = new Node;
class Stack{
    constructor(){
        this.top=-1;
        this.size=0;
    }
    isEmpty(){
        if(this.top==-1){
            return true;
        }return false;
    }
    size(){
        return this.size;
    }
    push(x){
        if(this.top==(this.max-1)){
            return false;
        }
        else{
            arr[++this.top]=x;
           this.size++;
            return true;
        }
    }
    pop(){
        if(this.top==-1){
            return false;
        }
        else{
            arr[this.top--];
            this.size--;
            return true;
        }
    }
    peek(){
        return arr[this.top];
    }
    display(){
        var str="";
        for(var i=0;i<this.size;i++){
            str=str+arr[i]+" ";
        }
        console.log(str);
    }
}
module.exports={
    Stack
}