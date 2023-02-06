function towerOfHanoii(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoii(n - 1, fromRod, usingRod, toRod)
    console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoii(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoii(3, 'A', 'C', 'B')

  //Big O - O(2^n - 1)
