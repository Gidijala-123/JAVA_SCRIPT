const arr = [1, 3, 4, 7]
let missNum = []
for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
  !arr.includes(i) ? missNum.push(i) : ""
}
console.log(missNum);
