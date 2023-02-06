function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}

let arr = [8, 20, -2, 4, -6]
insertionSort(arr);
console.log(arr)

  // big O = O(n^2)