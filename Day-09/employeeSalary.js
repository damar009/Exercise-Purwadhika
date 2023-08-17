// let number = 1234567.89;
// let formattedNumber = number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
// console.log(formattedNumber);

// let amount = 1234567.89;
// let formattedAmount = formatCurrencyIDR(amount);
// console.log(formattedAmount);

function formatCurrencyIDR(number) {
    return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

//===========================================
class Employee {
    constructor(type) {
        this.type = type;
        this.workingHours = 0;
    }
  
    addWorkingHours(hours) {
        this.workingHours += hours;
    }
  
    // calculateSalary() {
    //     return 0
    // }
}
  
class FulltimeEmployee extends Employee {
    calculateSalary() {
        return this.workingHours > 6 ? this.workingHours * 75000 : this.workingHours * 100000;
    }
}
  
class ParttimeEmployee extends Employee {
    calculateSalary() {
        return this.workingHours > 6 ? this.workingHours * 30000 : this.workingHours * 50000;
    }
}
  
//test
let fulltimeEmployee = new FulltimeEmployee();
let parttimeEmployee = new ParttimeEmployee();
let A = 7;
let B = 5;

fulltimeEmployee.addWorkingHours(A);
let fulltimeSalary = fulltimeEmployee.calculateSalary();
console.log("A work for", A, "hour(s)")
console.log("Fulltime Employee:", formatCurrencyIDR(fulltimeSalary));

parttimeEmployee.addWorkingHours(B);
let parttimeSalary = parttimeEmployee.calculateSalary();
console.log("B work for", B, "hour(s)")
console.log("Parttime Employee:", formatCurrencyIDR(parttimeSalary));
