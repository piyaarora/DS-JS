const obj = {
    name: 'piya',
    age: 25,
    'key-three': true,
    sayMyName: function () {
        console.log(this.name)
    }
}

// Accessing the elements
console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])

// add key value pair to object
obj.hobby = 'book reading'
console.log(obj)

// delete property
delete obj.hobby
console.log(obj)

// functions in object
obj.sayMyName()


  // some methods with objects -> Object.keys, .values, .entries
  // time complexities
  // 1. insert/ delete -> O(1)
  // 2. Access -> O(1)
  // 3. Search -> O(n)
  // 4. Object.keys -> O(n)
  // 5. Object.values -> O(n)
  // 6. Object.entries -> O(n)
