class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items.toString())
    }

}


const stack = new Stack()
console.log(stack.isEmpty())


stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.size());
stack.print();
stack.pop()
console.log(stack.peek())
