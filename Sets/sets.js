const set = new Set([1, 2, 3]);

console.log(set)
// insert the element in set
set.add(4);

// ignore the duplicate value
set.add(3)

// check for value if exist
console.log(set.has(3))
console.log(set.has(5))

// delete the element
set.delete(3)

// check the size of set
console.log('size', set.size)

// iterate the set
for (const item of set) {
    console.log(item)
}

// delete all elements of set
set.clear();

for (const item of set) {
    console.log('item', item)
}
