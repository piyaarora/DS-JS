// function isPrime(n){
//   if(n<2){
//     console.log("number is less than 2")
//     return false;
//   }
//   for(i =2; i<n ;i++){
//     if(n%i ==0){
//       console.log("number is not prime")
//       return false;
//     }
//   }
//   console.log('number is prime');
//   return true;
// }

// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(5))
// console.log(isPrime(4))

//big-O = O(n)


//optimal solution
// sqrt of n < a or b

function isPrime(n) {
    if (n < 2) {
        console.log("number is less than 2")
        return false;
    }
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            console.log("number is not prime")
            return false;
        }
    }
    console.log('number is prime');
    return true;
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(4))

//big-O = O(sqrt(n))

console.log("\n**********************************\n")
function prime(n) {
    if (n == 1 || n == 0)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true
}


function print(n) {
    for (let i = 1; i <= n; i++) {
        if (prime(i)) { console.log(i) }
    }
}
print(10)

  //big-O = O(n sqrt(n))
