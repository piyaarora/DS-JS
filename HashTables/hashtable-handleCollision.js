class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
            console.log(i, total);
        }
        return total % this.size;
    }


    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value

        //we create a bucket means an array of smaller arrays to store multiple values on same index;
        const bucket = this.table[index];
        if (!bucket) {
            //check if bucket exists or nor if buckt doesnt exists
            this.table[index] = [[key, value]]
        } else {
            // if array contains subarray with same key
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }


    get(key) {
        let index = this.hash(key);
        // return this.table[index];

        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
        const bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}



const table = new HashTable(50);
table.set('name', 'heyyaa');
table.set('age', 25);
table.display();

console.log('********************');
console.log(table.get("name"))
table.remove('name')
table.display();
console.log('********************');

table.set('name', 'heyyaa');
table.set('name', 'yolo');
table.display();
