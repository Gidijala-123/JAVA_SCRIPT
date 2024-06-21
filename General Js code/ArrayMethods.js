let arr = [1, 2, 3, 4, 5, 6];
delete arr[2];
console.log(arr)
console.log([1, 2, 3, 4, 5, 6].at(1));
console.log([1, 2, 3, 4, 5, 6].pop());
console.log([1, 2, 3, 4, 5, 6].push(7));
console.log([1, 2, 3, 4, 5, 6].fill(1));
console.log([1, 2, 3, 4, 5, 6].join("-"));
console.log([1, 2, 3, 4, 5, 6].shift());
console.log([1, 2, 3, 4, 5, 6].reverse());
console.log([1, 2, 3, 4, 5, 6].unshift(1));
console.log([1, 2, 3, 4, 5, 6].includes(5));
console.log([1, 2, 3, 4, 5, 6].every((num) => num > 3));
console.log([1, 2, 3, 4, 5, 6].find((num) => num > 3));
console.log([1, 2, 3, 4, 5, 6].findIndex((num) => num > 3));
console.log([1, 2, 3, 4, 5, 6].map((num) => num + 3));
console.log([1, 2, 3, 4, 5, 6].filter((num) => num > 3));
