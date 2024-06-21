const arr = new Array(10000).fill(Math.random());
console.time("for");
for (let i = 0; i < arr.length; i++) {}
console.timeEnd("for"); //for: 0.436ms

console.time("forEach");
arr.forEach(() => "");
console.timeEnd("forEach"); //forEach: 0.335ms

console.time("for of");
for (let i of arr) {
}
console.timeEnd("for of"); //for of: 2.659ms

console.time("while");
let i = 0;
while (i < arr.length) {
  i++;
}
console.timeEnd("while"); //while: 0.265ms

console.time("do while");
let j = 0;
do {
  j++;
} while (j < arr.length);
console.timeEnd("do while"); //do while: 0.46ms
