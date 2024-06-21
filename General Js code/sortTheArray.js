const arr = [1, 2, 3, 5, 1, 9, 0, 3]
const sortedArr = [...new Set(arr)].sort((a, b) => a - b)
console.log(sortedArr);
