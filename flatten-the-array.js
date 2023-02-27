const array = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12],
    [13, [14, 15, [16, 17, 18], 19], 20]
]

function customFlatten(arr, depth = 1) {
    const result = []

    arr.forEach(ar => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...customFlatten(ar, depth - 1))
        } else {
            result.push(ar)
        }
    })

    return result
}

console.log(customFlatten(array, 1)) // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12, 13, [ 14, 15, [ 16, 17, 18 ], 19 ], 20 ]
console.log(customFlatten(array, 2)) // [ 1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12, 13, 14, 15, [ 16, 17, 18 ], 19, 20 ]
console.log(customFlatten(array, 3)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
