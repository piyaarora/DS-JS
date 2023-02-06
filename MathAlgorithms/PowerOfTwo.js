
// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false
//     }
//     n = n / 2
//   }
//   return true
// }

// function isPowerOfTwo(n) {
//   if (n < 1) { return false }
//   for(i=n;i>1;i--){
//     if(i%2 !== 0){return false}
//     i =i/2;
//   }
//   return true
// }

function isPowerOfTwo(n) {
    if (n < 1) return false
    return (n & (n - 1)) === 0;
} //O(1)
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(7))

  // compexity : O(log n)
