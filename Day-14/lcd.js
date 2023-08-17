function lcd(a, b) {
  function gcd(p, q) {
    let remainder;
    while (q > 0) {
      remainder = p % q;
      p = q;
      q = remainder;
    }
    return p;
  }

  let GCD = gcd(a, b);
  return (a * b) / GCD;
}

let a = 120,
  b = 70;
console.log(lcd(a, b));
