const arr = [1, 2, 3, 4, 'liza']
console.log(arr[0])

// add in end
arr.push(5)

for (const item of arr) {
    console.log(item)
}

//add in start
arr.unshift(0)

// remove from start
arr.shift();

//remove from last
arr.pop()

// other array methods - map, filter,slice, splice, concat, reduce


// Time complexity
// 1. remove/ add in start -> O(n)
// 2. remove/ add to end -> O(1)
// 3. Access -> O(1)
// 4. Search -> O(n)
// 5. push / pop -> O(1)
// 6. slice / splice / concat / shift / unshift -> O(n)
// 7. forEach / map / filter / reduce -> O(n)

