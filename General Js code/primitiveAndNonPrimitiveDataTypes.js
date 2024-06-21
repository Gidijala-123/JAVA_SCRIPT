let a = "Bhargava";
let b = true;
let c = 10;
let d = null;
let e;

let aa = a;
let bb = b;
let cc = c;
let dd = d;
let ee = e;

aa = "Gidijala";
bb = false;
cc = 20;
dd = null;
ee;
console.log("Original values ", a, b, c, d, e);
console.log("Modified values ", aa, bb, cc, dd, ee);

let x = { name: "GBR", rno: 50 };
let y = ["Prime", 30];

let xx = x;
let yy = y;

xx.name = "priya";
xx.age = 25;
xx.rno;

yy[0] = "Mr_Prime";
yy[1] = 33;
console.log("Original values ", x, y);
console.log("Modified values ", xx, yy);
