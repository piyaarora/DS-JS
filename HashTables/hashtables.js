class HashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt();
            console.log(i, total)
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key)
        this.table[index] = value
        console.log('index from set', index);
    }

    get(value) {
        const index = this.hash(value);
        console.log('index from get', index)
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        console.log('index from get', index)
        this.table[index] = undefined;
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}



const table = new HashTable(50)
table.set('name', 'heyyaa')
table.set('age', 25);
table.print();

console.log('********************')
console.log(table.get("name"))
table.remove('name')
table.print();
