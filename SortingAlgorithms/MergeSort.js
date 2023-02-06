function mergeSort(arr) {
    //if array length is less than 2
    if (arr.length < 2) {
        return arr;
    }
    //Spilt the array into single elements;
    //lets find mid
    let mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function merge(leftArr, rightArr) {
    let sortedArr = []
    while (leftArr.length, rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr))

  //Big O - O(nlogn)
