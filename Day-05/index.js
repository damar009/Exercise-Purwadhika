//Write a function to get the lowest, highest and average value in the array (with and without sort function).
console.log("No. 1 =====================")
let arrayNumber = [1, 2, 3, 4, 5, 6, 7]

/*
const arrMin = arr => Math.min(...arr)

function arrMax(arr){
    return Math.max(...arr)
}
*/

function minMaxAvg(arr){
    return `Min: ${Math.min(...arr)}
Max: ${Math.max(...arr)}
Average: ${arr.reduce((a,b) => a+b , 0) / arr.length}`
}
console.log(`${arrayNumber}`)
console.log(minMaxAvg(arrayNumber))


//Write a function that takes an array of words and returns a string by concatenating the words in the array,
//separated by commas and - the last word - by an 'and'.
console.log("No. 2 =====================")
let arrayWord = ["achmad", "damanhuri", "damar"]
console.log(arrayWord)
function concatenate(arr){
    let result = ""
    for (let i = 0; i < (arr.length -1); i++) {
        result += arr[i] + ", "
    }
    result += "and " + arr[arr.length - 1]
    return result
}
console.log(concatenate(arrayWord))

//Write a function to split a string and convert it into an array of words
console.log("No. 3 =====================")
function splitWord(word){
    return console.log(word.split(" "))
}
let word = "Pagi dunia tipu tipu"
splitWord(word)

// Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length
console.log("No. 4 =====================")
function sumTwoArray(arr1, arr2){
    if(arr1.length === arr2.length){
        const result = []
        for (let i = 0; i < arr1.length; i++) {result.push(arr1[i] + arr2[i])}
        return result
    } else {console.log("error")}
}

let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]
console.log(sumTwoArray(array1, array2))

//Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array
console.log("No. 5 =====================")
function addUniqueElement(arr, element) {
    let isElementPresent = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        isElementPresent = true;
        break;
      }
    }
    if (!isElementPresent) {
      arr.push(element);
    }
}
  
const myArray = [1, 2, 3, 4];
const newElement = 4;
  
addUniqueElement(myArray, newElement);
console.log(myArray)

//Write a function to remove all odd numbers in an array and return a new array that contains evennumbers only
console.log("No. 6 =====================")
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