function printTriangle(height) {
    let currentNumber = 1
    for (let level = 1; level <= height; level++) {
        let tempResult = ""
        for (let column = 0; column < level; column++) {
            tempResult += `${String(currentNumber).padStart(2, 0)} `
            currentNumber++   
        }
        console.log(tempResult);
    }
}
const height = 10
console.log(`Result triangle with heighth: ${height}`)
printTriangle(height)