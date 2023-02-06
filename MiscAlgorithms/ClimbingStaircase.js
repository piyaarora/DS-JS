function stairs(n) {
    let numberOfWays = [1, 2]
    for (i = 2; i <= n; i++) {
        numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2]
    }
    return numberOfWays[n - 1]
}

console.log(stairs(1))
console.log(stairs(2))
console.log(stairs(3))
console.log(stairs(4))
console.log(stairs(5))

  //big o = o(n)
