function recBinSearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    }
    if (target > arr[middleIndex]) {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}


console.log(recBinSearch([10, 12, 16, 18, 25], 18))
console.log(recBinSearch([10, 12, 16, 18, 25], 12))
console.log(recBinSearch([10, 12, 16, 18, 25], 27))
  //big O = O(log n)
