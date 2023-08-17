function bodyMass(weight, height){
    let BMI = weight / height**2
    if (BMI < 18.5) return "less weight"
    if (BMI >= 18.5 && BMI <= 24.9) return "ideal"
    if (BMI >= 25 && BMI <= 29.9) return "overweight"
    if (BMI >= 30 && BMI <= 39.0) return "very overweight"
    if (BMI > 39.9) return "obesity"
}

let weight = 58
let height = 160
console.log(`weight ${weight} kg and height ${height} cm is ${bodyMass(weight, height)}`)