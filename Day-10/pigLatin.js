function pigConverter(str){
    return str.split(" ").map((item) => item.slice(1) + item[0] + "ay").join(" ")
}

const input = "Pig Latin is Cool !";
const output = pigConverter(input);
console.log(output)