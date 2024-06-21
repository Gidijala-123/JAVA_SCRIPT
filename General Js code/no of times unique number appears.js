let arr = [1, 2, 3, 3, 4, 3, 3, 4, 6, 7, 1]
let final = arr.reduce((acc, cval) => {
  acc[cval] = (acc[cval] || 0) + 1
  return acc;
}, {})
console.log(final);
