let arr = [1, "gbr", 10, {
  points: 33
}, 44, true];
let empArr = [];
const result = arr.map((each) => {
  typeof each === "number" ? empArr.push(each * 2) : empArr.push(typeof each);
});
console.log(empArr);
