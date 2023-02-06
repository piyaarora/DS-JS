function factorial(n) {
    let result = 1;
    for (i = 2; i <= n; i++) {
        result = result * i
    }
    return result;
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(7))

//big-O = O(n)

function recFactorial(n) {
    if (n === 0) return 1;
    return n * recFactorial(n - 1)
}

console.log(recFactorial(0))
console.log(recFactorial(1))
console.log(recFactorial(5))
console.log(recFactorial(7))


  //big-O = O(n)
