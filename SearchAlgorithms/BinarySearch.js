const binarySearch = (arr, target) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex;
        } else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([10, 12, 16, 18, 25], 18))
console.log(binarySearch([10, 12, 16, 18, 25], 12))
console.log(binarySearch([10, 12, 16, 18, 25], 27))

  //big O = O(log n)
