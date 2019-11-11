class Node {
    constructor(size) {

        this.size = size;
    }
}
var arrObj = new Node();

class Queue {
    constructor(capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.rear = this.capacity - 1;
    }

    isEmpty() {

        if (arrObj.size === 0)
            return true;
        else
            return false;
    }

    isFull() {

        if (arrObj.size !== this.capacity) {
            return false;
        }
        else {
            return true;
        }
    }


    enqueue(data) {

        //If queue is full
        if (this.isFull()){
        return;
        }

        //To enque in the queue
        this.rear = (this.rear + 1) % this.capacity;
        arrObj[this.rear] = data;
        this.size = this.size + 1;
        console.log(data + "enqueued to the queue");

    }

    dequeue(){

        var data = 0;

        //If queue is empty
        if (this.isEmpty()){
        return;
        }
        //To deque from the queue
        data = arrObj[this.front.data];
		this.front = (this.front + 1) % this.capacity;
		this.size = this.size - 1;
		return data;

    }

    
    front(){

        //to get the front of the queue
        if (this.isFull()){
            return;
            }
            return this.front;
    }

    rear(){

        //to get the rear of the queue
        if(this.isEmpty()){
            return;
        }
        return this.rear;
    }

    
}



module.exports = {
    Queue
}