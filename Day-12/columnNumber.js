function code(str){
    str = str.toUpperCase()
    let base = str.length -1
    let tempcode = 0
    let code = 0
    
    function calc(i){
        while(i <= base){
            tempcode = (str[i].charCodeAt(0) - 64) * Math.pow(26, base - i)
            code += tempcode
            i++
        }
    }
    calc(0)
    return console.log(code)

}

code("AAAA")
console.log('A'.charCodeAt(0)-64)


/*

function code(str){
    str = str.toUpperCase()
    // let charCodeA = 'A'.charCodeAt(0)
    let tempCode
    let code = 0
    for(let i = 0; i < str.length; i++){
        tempCode = str.charCodeAt(i) - 64
        code = code * 26 + tempCode
    }
    return console.log(code)
}

code("A")
console.log('A'.charCodeAt(0)-64)
*/