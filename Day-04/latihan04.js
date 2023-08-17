function removeOddNumber(inputArray) {
    return inputArray.filter((element) => element % 2 == 0)
}

const inputArray =
[
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
    10, 11, 12,
    13, 14, 15,
    16, 17, 18
                ]


console.log("Array" , inputArray)
console.log("Array without odd" , removeOddNumber(inputArray))