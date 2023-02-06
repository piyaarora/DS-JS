function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i <= n; i++)
        fib[i] = fib[i - 1] + fib[i - 2];
    return fib
}


console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(7))
//big-O = O(n)


// let n = 7


function nterms(n) {
    let n1 = 0
    let n2 = 1
    let nextTerm = n1 + n2;
    console.log("first 2 terms", [n1, n2])
    for (i = 3; i <= n; ++i) {
        console.log("termmm", nextTerm)
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;

    }
    return 0;
}
nterms(7)




function recursiveFib(n) {
    if (n < 2) return n;
    return recursiveFib(n - 1) + recursiveFib(n - 2);
}


console.log(recursiveFib(0))
console.log(recursiveFib(1))
console.log(recursiveFib(8))
  //big-O = O(2^n)
