const arr1 = ["apple", "banana", "grapes", "mango", "apple", "grapes", "orange"];
const givenLen = 5;
const result1 = arr1.filter((each) => (each.length > givenLen ? arr1 : null));
console.log(result1.length);

const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = arrNums
  .filter((flt) => flt % 2 == 0)
  .reduce((acc, cval) => acc + cval);
console.log(result2);

const maxValue = arrNums.reduce((acc, cval) => (acc > cval ? acc : cval))
console.log(maxValue);

const arr2 = ["apple", "banana", "grapes", "mango", "apple", "grapes", "orange"];
const captializeEachWord = arr2.map(
  (each) => each[0].toUpperCase() + each.slice(1)
);
console.log(captializeEachWord);

const arr3 = ["apple", "banana", "grapes", "mango", "apple", "grapes", "orange"];
const uniqueWords = arr3.filter((flt) => flt.includes("p")).reduce((acc, cval) => {
  acc[cval] = (acc[cval] || 0) + 1;
  return acc;
}, {})
console.log(uniqueWords);

const arr4 = ["apple", "banana", "grapes", "mango", "apple", "grapes", "orange"];
const countOfAInWords = arr4.reduce((acc, word) => {
  const countOfA = [...word].filter((char) => char === "a").length;
  acc[word] = countOfA;
  return acc;
}, {});

console.log(countOfAInWords);

const givenArr = [1, 3, 5, 7, 8];

function missingNumber(arr) {
  const missingArr = [];
  for (let i = arr[0]; i < arr[arr.length - 2]; i++) {
    !arr.includes(i) ? missingArr.push(i) : "";
  }
  return missingArr;
}
console.log(missingNumber(givenArr));

