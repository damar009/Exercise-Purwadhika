function isAnagram(s, t) {
    let sortClean = str => str.split('').sort().join('').replace(' ', '')
    return sortClean(s) === sortClean(t)
}


console.log(isAnagram("ana gram", "nagaram"));
console.log(isAnagram("rat", "car"));


const text = "Hello World!";
const spaceIndex = text.indexOf(' ');
console.log(spaceIndex); // Output: 5

console.log(text)