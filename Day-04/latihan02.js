function threeFive(n) {
    for (let index = 1; index <= n; index++) {
        let result = ""
        if (index % 3 != 0 && index % 5 != 0) {
            result = index
            } if (index % 3 == 0) {
                result += "Fizz"
                }
                if (index % 5 == 0) {
                    result += "Buzz"
                    }
        console.log(`${result}`)
    }
}

const inputthreeFive = 20
console.log(`Input: ${inputthreeFive}`)
threeFive(inputthreeFive)