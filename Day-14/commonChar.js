function commonChar(str) {
  let char = null;
  let charCountMax = 0;
  for (let i = 0; i < str.length; i++) {
    let charCount = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i != j) {
        charCount++;
      }
    }
    if (charCount > charCountMax) {
      charCountMax = charCount;
      char = str[i];
    }
  }
  return char;
}

console.log(commonChar("DAMAR"));
