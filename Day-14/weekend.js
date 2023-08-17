function isWeekend(date) {
    return date.getDay() == 0 || date.getDay() == 6 ? "Weekend" : "Weekdays"
}
/*
senin => 1
selasa => 2
rabu => 3
kamis => 4
jumat => 5
sabtu => 6
minggu => 0
*/

const today = new Date();
console.log(isWeekend(today));


const testDate = new Date('2022-11-13')
console.log(isWeekend(testDate))