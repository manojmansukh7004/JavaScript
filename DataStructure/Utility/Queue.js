class Queue{
    constructor(){
        this.item=[];
    }
    isEmpty(){
        if(this.item==0){
            return true;
        }return false;
    }
    inqueue(x){
        return this.item.push(x);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty.");
            return true;
        }return this.item.shift();
    }
    print(){
        var str="";
        for(var i=0;i<this.item.length;i++){
            str+=this.item[i]+" ";
        }
        console .log(str);
    }
}
module.exports={
    Queue
}