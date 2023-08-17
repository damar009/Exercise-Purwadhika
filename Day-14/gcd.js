function gcd(a, b) {
    let remainder;
    while (b > 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

let a = 120,
  b = 70;
console.log(gcd(a, b));

let p = 5,
  q = 0;
console.log(gcd(p, q));
