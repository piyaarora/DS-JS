class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.currentLength = 0;
    }
    isFull() {
        return this.capacity === this.currentLength
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enqueue(ele) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = ele;
            this.currentLength += 1;
            if (this.front == -1) {
                this.front = this.rear
            }
        }

    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength = this.currentLength - 1
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1
        }
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.front]
    }

    print() {
        if (this.isEmpty()) {
            console.log("queue is empty")
        }
        let i;
        let str = ''
        for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
            str = str + this.items[i] + ' ';
        }
        str = str + this.items[i];
        console.log(str)
    }

}

const queue = new CircularQueue(5);

console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull())
queue.print()
queue.dequeue()
queue.enqueue(60);
queue.print()
console.log(queue.peek())
