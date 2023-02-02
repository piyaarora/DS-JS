class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift()
    }

    peek() {
        if (this.items.length !== 0) {
            return this.items[0]
        }
        return null
    }

    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size())
console.log(queue.peek())
queue.print();
console.log(queue.isEmpty())

queue.dequeue();
queue.print();

console.log("***********************")
// Optimized queue implementation

class Queues {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(ele) {
        this.items[this.rear] = ele;
        this.rear++;
        return this.rear;
    }

    dequeue() {
        delete this.items[this.front];
        this.front++;
        return this.front;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log("elements", this.items)
    }
}

const queues = new Queues()
console.log('before Adding elements', queues.isEmpty());
queues.enqueue(5);
queues.enqueue(10);
queues.enqueue(15);
console.log('initial size', queues.size())
console.log('After Adding elements', queues.isEmpty());
console.log(queues.peek())
queues.print();
queues.dequeue();
queues.print();
console.log('size after dequeue', queues.size())
console.log(queues.peek())
