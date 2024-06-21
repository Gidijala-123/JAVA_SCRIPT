// SERIES - 1
const fruits = [
  "apple",
  "banana",
  "papaya",
  "mango",
  "grapes",
  "sapota",
  "apple",
  "mango",
  "apple",
];

// EXAMPLE ON MAP
let map = fruits.map((each) => each.toUpperCase());
console.log("map :", map);

// map - capitalize each word
let capitalizedWords = fruits.map(
  (each) => each[0].toUpperCase() + each.slice(1)
);
console.log("capitalizedWords :", capitalizedWords);

// EXAMPLE ON FILTER - unique values that contains letter 'p'
let UniqueValuesOF_p = fruits
  .filter((each) => each.includes("p"))
  .filter((curr, idx, arr) => arr.indexOf(curr) === idx);
console.log("UniqueValuesOF_p :", UniqueValuesOF_p);

// EXAMPLE ON FILTER,REDUCE - count of words that contains letter 'o'
let reduce = fruits
  .filter((each) => each.includes("o"))
  .reduce((acc, cval) => {
    acc[cval] = (acc[cval] || 0) + 1;
    return acc;
  }, {});
console.log("reduce :", reduce);

// EXAMPLE ON MAP,REDUCE - find average of grades
let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 95 },
];

let avgOfGrades =
  students.map((each) => each.grade).reduce((acc, cval) => acc + cval) /
  students.length;
console.log("avgOfGrades :", avgOfGrades);

const copyWithin = ["a", "b", "c", "d", "e"].copyWithin(1, 0, 2);
console.log("copyWithin :", copyWithin);

// SERIES - 1(2)
const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 7];

const max = numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log("max :", max);

const sum = numbers.reduce((acc, curr) => acc + curr);
console.log("sum :", sum);

const uniqueNums = numbers.filter(
  (curr, currIndex, arr) => arr.indexOf(curr) === currIndex
);
console.log("uniqueNums :", uniqueNums);

const evenNum = numbers.every((each) => each % 2 === 0);
console.log(evenNum);

// EXAMPLE ON SOME
const someNum = numbers.some((each) => each % 2 === 0);
console.log(someNum);

// EXAMPLE ON FIND,REVERSE - display last even number from the list
const find = numbers.reverse().find((each) => each % 2 === 0);
console.log("last even num : ", find);

// EXAMPLE ON FLAT
const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log("flatten arr1 :",arr1.flat()); 
console.log("flatten arr2 :",arr2.flat(2));
