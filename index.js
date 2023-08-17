let string = "Race car"
string = string.toLowerCase()

function palindrome(string){
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
  string = string.split("")
  string = string.filter((letter) => alpha.includes(letter))
  string = string.join("")
  result = string.split("").reverse().join("")
  return string = result ? "Palindrome" : "Not Palindrome"
}

console.log(palindrome(string))