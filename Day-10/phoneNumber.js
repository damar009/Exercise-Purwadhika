function phoneNumber(arr){
    result = "(xxx) xxx-xxxx"
    arr.map(item => {
        result = result.replace("x", item)
    })
    return result
}

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(phoneNumber(n))

function myFunct(arr){
    let str1 = "", str2 = "", str3 = ""
    arr.map((item, index) => {
        if(index < 3){
            str1 += item
        } else if(index < 6){
            str2 += item
        } else {str3 += item}
    })
    return `(${str1}) ${str2}-${str3}`
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(myFunct(arr))

function formatPhoneNumber(arr) {
    const str1 = arr.slice(0, 3).join('');
    const str2 = arr.slice(3, 6).join('');
    const str3 = arr.slice(6).join('');
    return `(${str1}) ${str2}-${str3}`;
}

const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(formatPhoneNumber(Number));
